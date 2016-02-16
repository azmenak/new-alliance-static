import React, { Component } from 'react';

export default class Typeform extends Component {
  render() {
    return (
      <span
        className="contact-button"
        dangerouslySetInnerHTML={{__html: `
          <a class="typeform-share button btn btn-primary"
          href="https://adamzmenak.typeform.com/to/H2CxU0" data-mode="1"
          target="_blank">Contact Us</a>
          <script>
          (function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
          if(!gi.call(d,id)){js=ce.call(d,'script');
          js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];
          q.parentNode.insertBefore(js,q)}id=id+'_';
          if(!gi.call(d,id)){qs=ce.call(d,'link');
          qs.rel='stylesheet';
          qs.id=id;qs.href=b+'share-button.css';
          s=gt.call(d,'head')[0];s.appendChild(qs,s)}})()
          </script>
          `}}
        />
    )
  }
}
