function initializeGoogleAnalytics(a,e){var n,g,i,o,t,l;n=window,g=document,i="script",o="ga",n.GoogleAnalyticsObject=o,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,t=g.createElement(i),l=g.getElementsByTagName(i)[0],t.async=1,t.src="//www.google-analytics.com/analytics.js",l.parentNode.insertBefore(t,l),ga("create","UA-53826304-2",{cookieDomain:"trello.com",sampleRate:1}),"/"==location.pathname?a?ga("send","pageview","/boards"):e?ga("send","pageview","/landing-login"):ga("send","pageview","/landing"):ga("send","pageview",location.pathname)}