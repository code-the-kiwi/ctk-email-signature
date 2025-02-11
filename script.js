document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signatureForm');
    const preview = document.getElementById('preview');
    const copyButton = document.getElementById('copyButton');

    function updateSignature() {
        const name = document.getElementById('name').value;
        const title = document.getElementById('title').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const website = document.getElementById('website').value;
        const linkedin = document.getElementById('linkedin').value;
        const twitter = document.getElementById('twitter').value;

        const signature = `
        <div class="signature-container">
            <table>
                <tr>
                    <td>
                        <img src="logo.png" alt="Company Logo" style="max-width: 150px; height: auto; margin-bottom: 10px;">
                    </td>
                    <td style="padding-left: 15px;">
                        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333333;">
                            <div style="font-size: 14px; font-weight: bold; margin-bottom: 5px; color: #000000;">
                                ${name}
                            </div>
                            <div style="font-size: 12px; color: #666666; margin-bottom: 10px;">
                                ${title}
                            </div>
                            <div style="font-size: 12px; line-height: 1.4;">
                                <div>${phone}</div>
                                <div>${email}</div>
                                <div>${website}</div>
                                <div style="margin-top: 10px;">
                                    ${linkedin ? `<a href="${linkedin}" style="text-decoration: none; color: #666666; margin-right: 10px;">LinkedIn</a>` : ''}
                                    ${twitter ? `<a href="${twitter}" style="text-decoration: none; color: #666666; margin-right: 10px;">Twitter</a>` : ''}
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>`;

        preview.innerHTML = signature;
    }

    form.addEventListener('input', updateSignature);
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        updateSignature();
    });

    copyButton.addEventListener('click', async function() {
        const htmlContent = preview.innerHTML;
        try {
            await navigator.clipboard.writeText(htmlContent);
            alert('Signature HTML copied to clipboard!');
        } catch (err) {
            // Fallback for browsers that don't support the Clipboard API
            const textarea = document.createElement('textarea');
            textarea.value = htmlContent;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('Signature HTML copied to clipboard!');
        }
    });
});
