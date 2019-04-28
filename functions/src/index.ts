import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
admin.initializeApp()

const db = admin.firestore()

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
    console.log('hello world!!!')
    response.send("Hello from Firebase!");
});

export const onNewLog2 = functions.firestore
    .document('logs/{shortid}')
    .onCreate(async(snap, context) => {
        
        const lastLog = snap.data() || {isOutgoing:false, amount:0, isCash: 0, category: 'Other'}
        const aggRef = db.collection('aggregations').doc('logs')

        const delta = lastLog.isOutgoing ? lastLog.amount * -1 : lastLog.amount

        console.log({delta: delta})
        
        return db.runTransaction(transaction => {
            return transaction.get(aggRef).then(doc => {

                const last = doc.data() || {balance:0, count:0, last5:[]}

                last.count = Number(last.count) ? last.count : 0 

                let next = {
                    balance: last.balance + delta,
                    count: last.count + 1,
                    last5: [lastLog, ...last.last5.slice(0,4)]
                }

                console.log(next)

                return transaction.update(aggRef, next)
            })
        })

    })