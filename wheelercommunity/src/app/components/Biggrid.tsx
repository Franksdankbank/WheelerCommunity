import React from 'react';
import Buttons from './Buttons';

const TextGrid: React.FC = () => {
  const buttonData = [
    { text: 'Academic Decathlon', link: 'https://padlet.com/sarahberthiaumeleduc/academic-decathlon-or7q5gf43rbwqab2' },
    { text: 'Album Music Club', link: 'https://padlet.com/sarahberthiaumeleduc/album-music-club-1e49rgt4h7tiq9l3' },
    { text: 'Animal Club', link: 'https://padlet.com/claire_hagerty/animal-club-6x8tr71zipag7x19' },
    { text: 'Art Club', link: 'https://padlet.com/sarahberthiaumeleduc/art-club-gpmwufeoetag64gs' },
    { text: 'Best Buddies', link: 'https://padlet.com/sarahberthiaumeleduc/best-buddies-qsh0rievkr1vi0za' },
    { text: 'Biomedical Club', link: 'https://padlet.com/sarahberthiaumeleduc/biomedical-club-lte5p279gjn5upjs' },
    { text: 'Book Club', link: 'https://padlet.com/sarahberthiaumeleduc/book-club-ks31bikqgewi5g66' },
    { text: 'Business Ventures Club', link: 'https://padlet.com/sarahberthiaumeleduc/business-ventures-club-6njc5eaz86ufl4g8' },
    { text: 'Cafe Series', link: 'https://padlet.com/sarahberthiaumeleduc/cafe-series-w3yam78fk9kp56cs' },
    { text: 'Chess', link: 'https://padlet.com/sarahberthiaumeleduc/chess-egfl36vu01s6kq4f' },
    { text: 'Chineese Culture and Language Club', link: 'https://padlet.com/sarahberthiaumeleduc/chinese-culture-and-language-club-xmt1fifkylxt8j1t' },
    { text: 'Classical Music Club', link: 'https://padlet.com/sarahberthiaumeleduc/classical-music-club-yqz4ez18ixf2zs2y' },
    { text: 'Debate', link: 'https://padlet.com/sarahberthiaumeleduc/debate-8bjzq38gn6vu8cmc' },
    { text: 'Design Club', link: 'https://padlet.com/sarahberthiaumeleduc/design-club-dgj5yqr9qmpnvhg3' },
    { text: 'Dungeons and Dragons Club', link: 'https://padlet.com/sarahberthiaumeleduc/d-d-club-q9x9iqfrbf9xaivo' },
    { text: 'Empowerement Club', link: 'https://padlet.com/sarahberthiaumeleduc/empowerment-club-3fvshb4rxi7gn3pz' },
    { text: 'Entreprenuership Club', link: 'https://padlet.com/sarahberthiaumeleduc/entrepreneurship-club-expunor247oi4v4u' },
    { text: 'Environmental Action Club', link: 'https://padlet.com/zeahpivorunas1/environmental-action-club-ipfvommsvjkczkum' },
    { text: 'Envirothon Team', link: 'https://padlet.com/sarahberthiaumeleduc/envirothon-team-t4hduwzpfg3ls9a6' },
    { text: 'Fitness and Nutrition Club', link: 'https://padlet.com/rileyharrison1/fitness-and-nutrition-club-olw48gc3sjs2dvfp' },
    { text: 'French Culture and Language Club', link: 'https://padlet.com/sarahberthiaumeleduc/french-language-and-culture-club-kpfy5mq82gx5w2ft' },
    { text: 'Game Design 101', link: 'https://padlet.com/om_khadka/game-design-dddmux9wikq6ydk2' },
    { text: 'Gotta Have Sole', link: 'https://padlet.com/sarahberthiaumeleduc/gotta-have-sole-a70wyfsd419azby2' },
    { text: 'Gyre (Yearbook)', link: 'https://padlet.com/sarahberthiaumeleduc/gyre-yearbook-m7bbeqp24krz8swb' },
    { text: 'Habitat for Humanity Club', link: 'https://padlet.com/sarahberthiaumeleduc/habitat-for-humanity-club-2a6veb0eax1oaqcs' },
    { text: 'Learning Differences Awareness Club', link: 'https://padlet.com/sarahberthiaumeleduc/learning-differences-awareness-club-i0wfkm4fe1788w24' },
    { text: 'Math Team', link: 'https://padlet.com/sarahberthiaumeleduc/math-team-u2i0s3mbyhjn9pdy' },
    { text: 'Mental Health Awareness Club', link: 'https://padlet.com/camille_heynen/mental-health-awareness-club-z8sfltssv4ho2klo' },
    { text: 'Mock Trial', link: 'https://padlet.com/sarahberthiaumeleduc/mock-trial-4brapdg5kknanpbc' },
    { text: 'Model United Nations', link: 'https://padlet.com/sarahberthiaumeleduc/model-united-nations-mun-9jxpquqpc6487af9' },
    { text: 'Nerds of Wheeler', link: 'https://padlet.com/sarahberthiaumeleduc/nerds-of-wheeler-em8w3ibldo9qg3t7' },
    { text: 'Neuroscience Club', link: 'https://padlet.com/sarahberthiaumeleduc/neuroscience-club-vme351ay0hmyr5t3' },
    { text: 'Outdoors Club', link: 'https://padlet.com/sarahberthiaumeleduc/outdoors-club-d914adv4nsmug1w3' },
    { text: 'Photography Club', link: 'https://padlet.com/sarahberthiaumeleduc/photography-club-gxgnf2qd59cd42eg' },
    { text: 'Political Action Club', link: 'https://padlet.com/sarahberthiaumeleduc/political-action-club-na1q2sbv3iv9sqey' },
    { text: 'Poets and writers Club', link: 'https://padlet.com/sarahberthiaumeleduc/poets-and-writers-club-kg4ge3tr1jiv3osr' },
    { text: 'Programming Team', link: 'https://wheeler-programming-team.github.io/' },
    { text: 'Queer Straight Alliance QSA', link: 'https://padlet.com/sarahberthiaumeleduc/queer-straight-alliance-qsa-cenjxjime2gn31wd' },
    { text: 'Radio Club', link: 'https://padlet.com/sarahberthiaumeleduc/radio-club-uc61w2rwltpdihbr' },
    { text: 'Refugee Dream Center Collaboration', link: 'https://padlet.com/sarahberthiaumeleduc/refugee-dream-center-collaboration-dge09peulj8fofcw' },
    { text: 'Robotics', link: 'https://electricquahogs.gatsbyjs.io' },
    { text: 'Save The Bay', link: 'https://padlet.com/sarahberthiaumeleduc/save-the-bay-club-tdc8gmjaipmjv969' },
    { text: 'Science Olimpiad', link: 'https://padlet.com/sarahberthiaumeleduc/science-olympiad-cusl8ctctj2wrl23' },
    { text: 'Sewing Club', link: 'https://padlet.com/sarahberthiaumeleduc/sewing-club-8n1mclhilt5h3q3f' },
    { text: 'Social Committee', link: 'https://padlet.com/monique_pond/social-committee-t5s0jta0p501y0xq' },
    { text: 'Spoke (Student Newspaper)', link: 'https://padlet.com/sarahberthiaumeleduc/spoke-student-newspaper-vnoo2vjtvbnif8wk' },
    { text: 'The Spoon Game', link: 'https://padlet.com/ethan_insler/the-spoon-game-8fvtmcnzoegh6h09' },
    { text: 'STEM Club', link: 'https://padlet.com/sarahberthiaumeleduc/stem-club-kiofsvqjudt1toxo' },
    { text: 'StockMarket Club', link: 'https://padlet.com/sarahberthiaumeleduc/stock-market-club-78u4vz4yq6vhooa8' },
    { text: 'Student Ambassadors', link: 'https://padlet.com/sarahberthiaumeleduc/student-ambassadors-g2wreu4u7juu2xcq' },
    { text: 'Students Involved In Cultural Awareness', link: 'https://padlet.com/sarahberthiaumeleduc/students-involved-in-cultural-awareness-sica-t9m1sjc860fwgv5y' },
    { text: 'Volunteer Club', link: 'https://padlet.com/sarahberthiaumeleduc/volunteer-club-styhs7ir5oovlyu' },
    { text: 'Women in Business Club', link: 'https://padlet.com/sarahberthiaumeleduc/women-in-business-club-cugh68np3reatxyr' },
    // Add more text and link values as needed
  ];

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {buttonData.map(({ text, link }, index) => (
          <Buttons key={index} text={text} linkTo={link} />
        ))}
      </div>
    </div>
  );
};

export default TextGrid;