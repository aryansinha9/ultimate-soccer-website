import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=2000&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-black/20"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black leading-tight uppercase">
              Privacy & <span className="text-yellow-400">Cookies</span> Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-8 text-gray-300 leading-relaxed">
              
              <div>
                <p className="text-lg">
                  Ultimate Football Pty Ltd is committed to protecting your privacy. This Privacy Policy explains our data processing practices and your options regarding the ways in which your personal data is used.
                </p>
                <p className="text-lg">
                  If you have any requests concerning your personal information or any queries with regard to our processing please contact us.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Information collected</h3>
                <p>
                  Whether online or through our customer service team we may collect details provided by you on registration or enquiry together with information we learn about you from your use of our service and your visits to our web site and facilities. We may also collect information about the transactions you undertake including details of any payment cards used. Also, we may collect additional information in connection with your participation in any promotions or competitions offered by us and information you provide when giving us feedback or completing profile forms. We also monitor customer traffic patterns and site use which enables us to improve the service we provide.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Use of your information and your preferences</h3>
                <p>
                  We may use your information to provide and personalise our service. We may also use your contact details to communicate with you. We may use your information to send you offers and news about our new products and services which we think may be of interest to you. We may contact you by post, email, telephone or fax for these purposes. If you wish to be removed from this service please contact us.
                </p>
                <p>
                  We like to hear your views to help us improve our service. From time to time, we may contact you by post, email, telephone or fax to ask your opinions.
                </p>
                <p>
                  Please note that there may be instances where it may be necessary for us to communicate with you, in any event, for administrative or operational reasons relating to our service.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Disclosures of your information</h3>
                <p>
                  Your information may be used by Ultimate Football Pty Ltd. We will never pass your personal data to anyone else, except for any successors in title to our business. We may also use and disclose information in aggregate (so that no individual customers are identified) for marketing and strategic development purposes. We do not release any of your information to 3rd parties for marketing purposes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Other web sites</h3>
                <p>
                  Our web site may contain links to other web sites which are outside our control and are not covered by this Privacy Policy. If you access other sites using the links provided, the operators of these sites may collect information from you which will be used by them in accordance with their privacy policy, which may differ from ours.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Cookies</h3>
                <p>
                  "Cookies" are small pieces of information sent by a web server to a web browser, which enables the server to collect information from the browser. You can find out more about the way cookies work at www.cookiecentral.com. Ultimate Football Pty Ltd uses cookies for a number of purposes, for instance, to enable us to simplify the logging on process for registered users, to help ensure the security and authenticity of registered users, to improve navigation and to enable traffic monitoring. Non-registered visitors of the site may be sent anonymous cookies to keep track of their browsing patterns and build up a demographic profile. Whilst you do not need to allow your browser to accept cookies in order to browse much of our web site or to access many of our services, you must have cookies enabled if you wish to access any areas reserved for registered users. Most browsers allow you to turn off the cookie function. If you want to know how to do this please look at the help menu on your browser. As described above this will restrict the services you can use on our web site.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Access rights</h3>
                <p>
                  You have a right to access the personal data that is held about you. To obtain a copy of the personal information Ultimate Football Pty Ltd holds about you, please get in touch.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}