import React from 'react';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto my-5 px-5 py-4 border rounded-3'>
            <h2 className='text-center mb-4'>Questions and Answers</h2>
            <div>
                <h5>1. Difference between authorization and authentication</h5>
                <ul>
                    <p>Authentication is the process of verifying someone. Suppose, if a user want to login to a website,He/She must enter his/her email/username and password. If the given information matches the information stored in database, then the user can login. This process of verifying an user is call authentication</p>
                    <p>Authorization is the process of verifying what options,resources, functionalities specific user have access of a website. There can be different types of user with different level of access to a website(such as, Admin,Moderator,Visitor,Editor etc.)</p>
                </ul>
            </div>
            <div>
                <h5>2. Why are you using firebase? What other options do you have to implement authentication?</h5>
                <ul>
                    <p>I'm using firebase for user registration & sign in authentication and for hosting my website.</p>
                    <p>There are other options also available to implement authentication except fireBase. Such as:
                        <ul>
                            <li>Auth0</li>
                            <li>AWS Amplify and Cognito.</li>
                            <li>Azure AD B2C.</li>
                            <li>Ping Identity.</li>
                        </ul>
                    </p>
                </ul>
            </div>
            <div>
                <h5>3. What other services does firebase provide other than authentication?</h5>
                <ul>
                    <p>Firebase provides some other services other than authentication. Such as:
                        <ul>
                            <li>Cloud Firestore</li>
                            <li>Cloud Functions</li>
                            <li>Hosting</li>
                            <li>Cloud Storage</li>
                            <li>Google Analytics</li>
                            <li>Predictions</li>
                            <li>Cloud Messaging</li>
                            <li>Dynamic Links</li>
                            <li>Remote Config</li>
                        </ul>
                    </p>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;