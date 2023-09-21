import {db} from "@/mock-data/db";
import {PaymentInfo} from "@/mock-data/types";

export const getOwnerInfo = (id: string) => {
    return db.owners.find(owner => owner.id === id)
}

export const getUserPaymentHistory = (id: string) => {
    const user = db.owners.find(owner => owner.id === id);
    if (!user) return null;

    let paymentList: PaymentInfo[] = [];

    user.paymentHistory.map(utility => {
        utility.payments.map(payment => {
            const flattened: PaymentInfo = {
                date: payment.date,
                organization: utility.organization,
                service: utility.service,
                sum: payment.sum,
            };
            paymentList = [...paymentList, flattened];
        });
    });

    paymentList.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        // return dateA.getTime() - dateB.getTime(); // from old to new
        return dateB.getTime() - dateA.getTime(); // from new to old
    });

    return paymentList;
};
