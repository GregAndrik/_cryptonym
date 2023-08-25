const HomeContent = () => {
  return (
    <div className="home-content">
      <div className="home-content-row"> 
        <h2 className='home-content-row-title'>Secure Portal</h2>
        <p>
          Access to this service is restricted to operatives possessing Clearance Level 3 or higher. As a vital resource within our organization, this portal ensures the
          confidentiality of sensitive data. Your commitment to vigorously safeguarding classified information is appreciated, proceed with vigilance.
        </p>
      </div>
      
      <div className="home-content-row">
        <h2 className='home-content-row-title'>Operational Protocol</h2>
        <p>
          Users must establish direct contact with their designated supervisor agent to obtain the necessary security tokens required for decryption purposes. Furthermore, any 
          event suggestive of a security breach demands immediate attention. By adhering to this directive, we collectively ensure the unyielding protection of classified information.
        </p>
      </div>

      <div className="home-content-row">
        <h2 className='home-content-row-title'>Confidential Dispatch</h2>
        <p>
          Classified documents are delivered separately to their designated Security tokens in order to maintain confidentiality. Handle with utmost discretion and adhere to
          established procedures at all times. This protocol underscores our unwavering commitment to safeguarding sensitive information critical to our organization. 
        </p>
      </div>

      <div className="home-content-row">
        <h2 className='home-content-row-title'>Critical Directive</h2>
        <p>
          Use of Security tokens is strictly reserved for authorized personnel; distribution to unauthorized individuals is strictly prohibited. Breach of this protocol will be
          considered high treason against the state and will be met with immediate and severe consequences. This uncompromising policy ensures the integrity of our organization. 
        </p>
      </div>
    </div>
  );
};

export default HomeContent;