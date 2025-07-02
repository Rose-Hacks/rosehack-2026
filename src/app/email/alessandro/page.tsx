const rawHTML = `
<table width="200px" cellpadding="0" cellspacing="0" style="background-image: url('https://www.rosehack.com/email/alessandro3.webp'); background-size: cover; background-position: center; background-repeat: no-repeat;">
  <tbody>
    <tr>
      <td height="250px" style="vertical-align: bottom;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td style="text-align: right; padding-right: 65px; padding-bottom: 65px;">
                <a href="https://www.linkedin.com/company/rosehack/" target="_blank" style="text-decoration: none; margin-right: 3px;">
                  <img src="https://www.rosehack.com/email/linkedin.png" alt="linkedin icon" width="15" height="15" style="display: inline-block; vertical-align: middle;" />
                </a>
                <a href="https://www.instagram.com/rosehackucr/" target="_blank" style="text-decoration: none; margin-right: 3px;">
                  <img src="https://www.rosehack.com/email/instagram.png" alt="instagram icon" width="15" height="15" style="display: inline-block; vertical-align: middle;" />
                </a>
                <a href="https://www.rosehack.com/" target="_blank" style="text-decoration: none; margin-right: 3px;">
                  <img src="https://www.rosehack.com/email/website.png" alt="website icon" width="15" height="15" style="display: inline-block; vertical-align: middle;" />
                </a>
                <a href="https://x.com/rosehackucr" target="_blank" style="text-decoration: none;">
                  <img src="https://www.rosehack.com/email/x.png" alt="x icon" width="10" height="10" style="display: inline-block; vertical-align: middle; margin-bottom: 3px;" />
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
  return <div dangerouslySetInnerHTML={{ __html: rawHTML }} />;
};

export default EmailPreview;
