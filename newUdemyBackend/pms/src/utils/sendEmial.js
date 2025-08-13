import nodemailer from "nodemailer";

import Mailgen from "mailgen";
import { ApiError } from "./ApiError.js"

const sendEmail = async (options) => {
    console.log(options);

    try {
        const mailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "PMS",
                link: "https://pms.com"
            },

        });
        const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
        const emailHtml = mailGenerator.generate(options.mailgenContent);
        console.log(`${emailHtml}, ${emailTextual}`);

        try {
            const sendEmail = await transport.sendMail({
                from: "pms.com",
                to: options?.email,
                subject: options.subject,
                text: `${emailTextual}`,
                html: `${emailHtml}`
            })
            console.log("email sent successfully");
            return sendEmail
        } catch (error) {
            console.log(error);

            throw new ApiError(500, "email not sent");
        }
    } catch (error) {
        throw new ApiError(500, error.message || "problem occur in sending email")
    }

}

// Looking to send emails in production? Check out our Email API/SMTP product!
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "f8a3038af7f804",
        pass: "2de69d285871a7"
    }
});
export { sendEmail }