import { mailtrapClient, sender } from "./mailtrap.config.js";
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTeamplates.js"
export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify Your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })
        console.log("Email sent sucessfully", response);
    } catch (error) {
        console.error(`Error sending verificated`, error);

        throw new Error(`Error sending verification email`, error);
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "7338e962-818f-4c5b-8401-d691b57b9225",
            template_variables: {
                "company_info_name": "Auth Company",
                "name": name
            }
        })
        console.log("Welcome Email sent sucessfully", response);
    } catch (error) {
        console.error(`Error sending welcome email`, error);

        throw new Error(`Error sending welcome email`, error);
    }

}

export const sendResetPasswordEmail = async (email, resetURL) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset"
        })
        console.log("Reset Password Email sent sucessfully", response);
    } catch (error) {
        console.error(`Error sending reset password email`, error);

        throw new Error(`Error sending reset password email`, error);
    }
}

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Success",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset"
        })
        console.log("Reset Password Email sent sucessfully", response);
    } catch (error) {
        console.error(`Error sending reset password email`, error);

        throw new Error(`Error sending reset password success email`, error);
    }
}