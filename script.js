document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signatureForm');
    const preview = document.getElementById('preview');

    function updateSignature() {
        const name = document.getElementById('name').value;
        const title = document.getElementById('title').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const website = 'codethekiwi.be';

        const signature = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; color: #141E19; line-height: 1.5;">
            <table style="border-collapse: collapse; width: 100%;">
                <tr>
                    <td style="vertical-align: middle; padding-right: 20px; width: 120px; text-align: center;">
                        <img src="logo.png" alt="Company Logo" style="width: 100px; height: auto;">
                    </td>
                    <td style="vertical-align: top; padding-left: 20px; border-left: 2px solid #9DC669;">
                        <div style="margin-bottom: 5px;">
                            <div style="font-size: 16px; font-weight: 600; color: #113421; margin-bottom: 4px;">
                                ${name}
                            </div>
                            <div style="font-size: 14px; color: #14492C; margin-bottom: 12px;">
                                ${title}
                            </div>
                        </div>
                        <div style="font-size: 13px; color: #141E19;">
                            ${phone ? `<div style="margin-bottom: 4px;">${phone}</div>` : ''}
                            ${email ? `<div style="margin-bottom: 4px;"><a href="mailto:${email}" style="color: #47AD5C; text-decoration: none;">${email}</a></div>` : ''}
                            <div><a href="https://${website}" style="color: #47AD5C; text-decoration: none;">${website}</a></div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>`;

        preview.innerHTML = signature;
    }

    form.addEventListener('input', updateSignature);
    updateSignature();
});
