import React from "react";

const rawHTML = `
<table width="400" cellpadding="0" cellspacing="0" style="background-image: url('https://www.rosehack.com/email/alessandro.webp'); background-size: cover; background-position: center; background-repeat: no-repeat;">
  <tbody>
    <tr>
      <td height="200" style="vertical-align: bottom;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td style="text-align: right; padding-right: 75px; padding-bottom: 40px;">
                <a href="https://www.linkedin.com/company/rosehack/" target="_blank" style="text-decoration: none; margin-right: 8px;">
                  <img src="https://www.rosehack.com/email/linkedin.webp" alt="linkedin icon" width="20" height="20" style="display: inline-block; vertical-align: middle;" />
                </a>
                <a href="https://www.instagram.com/rosehackucr/" target="_blank" style="text-decoration: none; margin-right: 8px;">
                  <img src="https://www.rosehack.com/email/instagram.webp" alt="instagram icon" width="20" height="20" style="display: inline-block; vertical-align: middle;" />
                </a>
                <a href="https://www.rosehack.com/" target="_blank" style="text-decoration: none; margin-right: 8px;">
                  <img src="https://www.rosehack.com/email/website.webp" alt="website icon" width="20" height="20" style="display: inline-block; vertical-align: middle;" />
                </a>
                <a href="https://x.com/rosehackucr" target="_blank" style="text-decoration: none;">
                  <img src="https://www.rosehack.com/email/x.webp" alt="x icon" width="14" height="14" style="display: inline-block; vertical-align: middle; margin-bottom: 3px;" />
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
    <div style={{ fontSize: 0, lineHeight: 0 }}>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
    </div>
  );
};

export default EmailPreview;
