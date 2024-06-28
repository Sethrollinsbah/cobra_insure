import { SESClient, SendRawEmailCommand } from "@aws-sdk/client-ses";
import { json } from "@sveltejs/kit";
const subheader =
  "Jonbonae.com is an automated emailing client.Someone invited you to join.";
const action =
  "Jonbonae.com is an automated emailing client.Someone invited you to join.";

const message = `<html style=
font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
box - sizing: border - box;
font - size: 14px;
margin: 0;
" xmlns="http://www.w3.org/1999/xhtml"><head>
<meta name="viewport" content = "width=device-width" >
  <meta http - equiv="Content-Type" content = "text/html; charset=UTF-8" >
    <title>Actionable emails e.g.reset password </title>

      < style type = "text/css" >
        img {
  max - width: 100 %;
}
      body {
  -webkit - font - smoothing: antialiased;
  -webkit - text - size - adjust: none;
  width: 100 % !important;
  height: 100 %;
  line - height: 1.6em;
}

@media only screen and(max - width: 640px) {
        body {
    padding: 0!important;
  }
        h1 {
    font - weight: 800!important;
    margin: 20px 0 5px!important;
  }
        h2 {
    font - weight: 800!important;
    margin: 20px 0 5px!important;
  }
        h3 {
    font - weight: 800!important;
    margin: 20px 0 5px!important;
  }
        h4 {
    font - weight: 800!important;
    margin: 20px 0 5px!important;
  }
        h1 {
    font - size: 22px!important;
  }
        h2 {
    font - size: 18px!important;
  }
        h3 {
    font - size: 16px!important;
  }
        .container {
    padding: 0!important;
    width: 100 % !important;
  }
        .content {
    padding: 0!important;
  }
        .content - wrap {
    padding: 10px!important;
  }
        .invoice {
    width: 100 % !important;
  }
}
</style>
  </head>

  < body itemscope = "" itemtype = "http://schema.org/EmailMessage" style = "font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; padding:20px ; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor = "#f6f6f6" >
    <a href="/" class=" group relative z-10 flex aspect-square h-9 w-9 items-center justify-center text-3xl" > <svg viewBox="0 0 1000 1000" fill = "none" xmlns = "http://www.w3.org/2000/svg" width = "40" height = "40" >
      <path d="M0 100C0 44.7715 44.7715 0 100 0H900C955.228 0 1000 44.7715 1000 100V900C1000 955.228 955.228 1000 900 1000H100C44.7715 1000 0 955.228 0 900V100Z" fill = "url(#paint0_linear_243_2)" > </path>
        < path d = "M264.922 805C246.172 805 240.052 796.406 246.562 779.219L437.969 276.484C446.042 255.391 458.281 244.844 474.688 244.844H529.375C545.781 244.844 558.021 255.391 566.094 276.484L757.5 779.219C764.01 796.406 757.891 805 739.141 805H677.031C659.844 805 647.865 796.016 641.094 778.047L601.25 672.969H402.812L362.969 778.047C356.198 796.016 344.219 805 327.031 805H264.922ZM439.141 576.094H564.922L516.875 451.875C511.146 437.292 507.63 426.745 506.328 420.234C505.286 413.464 504.115 403.568 502.812 390.547H501.25C499.948 403.568 498.646 413.464 497.344 420.234C496.302 426.745 492.917 437.292 487.188 451.875L439.141 576.094Z" fill = "#3864FF" fill - opacity="0.86" > </path>
          < defs >
          <linearGradient id="paint0_linear_243_2" x1 = "-403" y1 = "-591.5" x2 = "1000" y2 = "1099.5" gradientUnits = "userSpaceOnUse" >
            <stop stop - color="#002DCD" > </stop>
              < stop offset = "1" stop - color="#120159" > </stop>
                </linearGradient>
                </defs>
                </svg>

                </a>  <table class="body-wrap" style="
font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
box - sizing: border - box;
font - size: 14px;
width: 100 %;
margin: 0;
">
  < tbody > <tr style="
font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
box - sizing: border - box;
font - size: 14px;
margin: 0;
">
  < td style = "
font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
box - sizing: border - box;
font - size: 14px;
vertical - align: top;
margin: 0;
" valign="top"></td>
  < td class="container" width = "600" style = "
font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
box - sizing: border - box;
font - size: 14px;
vertical - align: top;
display: block!important;
max - width: 600px!important;
clear: both!important;
margin: 0 auto;
" valign="top">
  < div class="content" style = "
font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
box - sizing: border - box;
font - size: 14px;
max - width: 600px;
display: block;
margin: 0 auto;
padding: 20px;
">
  < table class="main" width = "100%" cellpadding = "0" cellspacing = "0" itemprop = "action" itemscope = "" itemtype = "http://schema.org/ConfirmAction" style = "
font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
box - sizing: border - box;
font - size: 14px;
border - radius: 3px;
background - color: #fff;
margin: 0;
border: 1px solid #e9e9e9;
" bgcolor="#fff">
  < tbody > <tr style="
font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
box - sizing: border - box;
font - size: 14px;
margin: 0;
">
  < td class="content-wrap" style = "
font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
box - sizing: border - box;
font - size: 14px;
vertical - align: top;
margin: 0;
padding: 20px;
" valign="top">
  < meta itemprop = "name" content = "Confirm Email" style = "
font - family: 'Helvetica Neue', Helvetica, Arial,
  sans - serif;
box - sizing: border - box;
font - size: 14px;
margin: 0;
">
  < table width = "100%" cellpadding = "0" cellspacing = "0" style = "
font - family: 'Helvetica Neue', Helvetica, Arial,
  sans - serif;
box - sizing: border - box;
font - size: 14px;
margin: 0;
">
  < tbody > <tr style="
font - family: 'Helvetica Neue', Helvetica, Arial,
  sans - serif;
box - sizing: border - box;
font - size: 14px;
margin: 0;
">
  < td class="content-block" style = "
font - family: 'Helvetica Neue', Helvetica, Arial,
  sans - serif;
box - sizing: border - box;
font - size: 14px;
vertical - align: top;
margin: 0;
padding: 0 0 20px;
" valign="top">
                        Verify Your Email
  </td>
  </tr>
  < tr style = "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" >
    <td class="content-block" style = "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; opacity: 0.5; padding: 0 0 20px 20px;" valign = "top" >

      <i>${subheader}</i>
        </td>
        </tr>

        < tr style = "
font - family: 'Helvetica Neue', Helvetica, Arial,
  sans - serif;
box - sizing: border - box;
font - size: 14px;
margin: 0;
">
  < td class="content-block" style = "
font - family: 'Helvetica Neue', Helvetica, Arial,
  sans - serif;
box - sizing: border - box;
font - size: 14px;
vertical - align: top;
margin: 0;
padding: 0 0 20px;
" valign="top">
                       ${action}</td>
  </tr>
  < /tbody></table > <table width="100%" cellpadding = "0" cellspacing = "0" style = "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" >
    <tbody><tr>
    <td>
    <a class="btn-primary" itemprop = "url" style = "
font - family: 'Helvetica Neue', Helvetica, Arial,
  sans - serif;
box - sizing: border - box;
font - size: 14px;
color: #fff;
text - decoration: none;
line - height: 2em;
font - weight: bold;
text - align: center;
cursor: pointer;
display: inline - block;
border - radius: 5px;
text - transform: capitalize;
background - color: hotpink;
margin: 0;
width: 100 %;
border - color: hotpink;
border - style: solid;
border - width: 10px 20px;
" href="tel: 3214437405">Call Now
  </a>
  </td>
  </tr>


  < /tbody></table >

  </td></tr > </tbody></table >
  </div></td >
  </tr>
  < /tbody></table >

  <div class="footer" style = "
font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
box - sizing: border - box;
font - size: 14px;
width: 100 %;
clear: both;
color: #999;
margin: 0;
padding: 20px;
">
  < table width = "100%" style = "
font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
box - sizing: border - box;
font - size: 14px;
margin: 0;
">
  < tbody > <tr style="
font - family: 'Helvetica Neue', Helvetica, Arial, sans - serif;
box - sizing: border - box;
font - size: 14px;
margin: 0;
">
  < td class="aligncenter content-block" style = "
font - family: 'Helvetica Neue', Helvetica, Arial,
  sans - serif;
box - sizing: border - box;
font - size: 12px;
vertical - align: top;
color: #999;
text - align: center;
margin: 0;
padding: 0 0 20px;
" align="center" valign="top">
                   Powered by
  < a style = "
font - family: 'Helvetica Neue', Helvetica, Arial,
  sans - serif;
box - sizing: border - box;
font - size: 12px;
color: hotpink;
text - decoration: underline;
margin: 0;
" href="http://alexanderhealthconsulting.com">Alexander Health Consulting</a>
</td>
  </tr>
  < /tbody></table >
  </div>
  < /body></html >`;
const input = {
  Destinations: ["sethryanrollins@gmail.com"],
  RawMessage: {
    Data: message,
  },
  Source: "seth@alexanderhealthconsulting.com",
};
const client = new SESClient({
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET,
  },
  region: "us-east-1",
});
export async function POST({ request }) {
  const command = new SendRawEmailCommand(input);

  const response = await client.send(command);
  console.log(response);

  return json({
    status: 200,
  });
}
