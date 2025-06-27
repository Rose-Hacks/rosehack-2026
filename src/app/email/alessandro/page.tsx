import React from "react";

const rawHTML = `
<table width="400" cellpadding="0" cellspacing="0" style="background-image: url('https://www.rosehack.com/email/alessandro.webp'); background-size: cover; background-position: center; background-repeat: no-repeat; border-collapse: collapse; display: block; max-width: 100%;">
  <tbody>
    <tr>
      <td height="200" style="vertical-align: bottom; display: block; width: 100%; box-sizing: border-box;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
          <tbody>
            <tr>
              <td style="text-align: right; padding: 0 20px 20px 0; box-sizing: border-box;">
                <a href="https://www.linkedin.com/company/rosehack/" target="_blank" style="text-decoration: none; margin: 0 4px; display: inline-block;">
                  <img src="https://www.rosehack.com/email/linkedin.png" alt="linkedin icon" width="20" height="20" style="display: inline-block; vertical-align: middle; border: 0;" />
                </a>
                <a href="https://www.instagram.com/rosehackucr/" target="_blank" style="text-decoration: none; margin: 0 4px; display: inline-block;">
                  <img src="https://www.rosehack.com/email/instagram.png" alt="instagram icon" width="20" height="20" style="display: inline-block; vertical-align: middle; border: 0;" />
                </a>
                <a href="https://www.rosehack.com/" target="_blank" style="text-decoration: none; margin: 0 4px; display: inline-block;">
                  <img src="https://www.rosehack.com/email/website.png" alt="website icon" width="20" height="20" style="display: inline-block; vertical-align: middle; border: 0;" />
                </a>
                <a href="https://x.com/rosehackucr" target="_blank" style="text-decoration: none; margin: 0 4px; display: inline-block;">
                  <img src="https://www.rosehack.com/email/x.png" alt="x icon" width="14" height="14" style="display: inline-block; vertical-align: middle; border: 0;" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
`;

const EmailPreview = () => {
  return (
    <div style={{ margin: 0, padding: 0, lineHeight: 0 }}>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
    </div>
  );
};

export default EmailPreview;
