import React from "react";
import "./index.scss";
import Header from '../Header';
import Blogs from '../Blogs';
import Posts from '../Posts';
import Section from '../Section';
import missionSrc from '../../assets/images/mission.jpg';
import visionSrc from '../../assets/images/vision.jpg';
import getBuyingCenterInsightSrc from '../../assets/images/get-buying-center-insight.jpg';
import managedMarketingDatabaseSrc from '../../assets/images/managed-marketing-database.jpg';
import competitiveIntelligenceSrc from '../../assets/images/competitive-intelligence.jpg';
import digitalMarketingSrc from '../../assets/images/digital-marketing.jpg';
import databaseManagementSrc from '../../assets/images/database-management.jpg';
import websiteDevelopmentSrc from '../../assets/images/website-development.jpg';

/* ./images/get-buying-center-insight.jpg */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    const sty = {
      backgroundImage: "url('http://placehold.it/1900x1080')"
    };
    const sectionData = [
      {
        'id': 'about_us',
        'classItem': '',
        'imgItemShow': '2',
        'map': false,
        'h2': 'What we do ?',
        'h3': 'Story about us',
        'grid': [12, 12],
        'para': [`2Formatics Solutions is a data intelligence and marketing automation company formed by a bunch of professionals who have spent 10+ years in the same vertical and helped customer maximizing ROI.We are customer oriented company and our only focus is customer satisfaction. We serve customers from all verticals across the globe with our data intelligence and marketing automation solutions to achieve maximum ROI by saving time,cost and effort. We have partnered with many brands which are located across the globe,to make sure we deliver the best in the industry. `],
        'btn': ['LEARN MORE', './get-buying-center-insight.html'],
        'imageCardAble': true,
        'imageCard': [{
          href: './about-us.html', text: 'Mission', alt: 'item alt', src: missionSrc
        }, {
          href: './about-us.html', text: 'Vision', alt: 'item alt', src: visionSrc
        }],
      }, {
        'id': 'why',
        'classItem': '',
        'imgItemShow': '',
        'map': false,
        'h2': 'Why 2formatics ?',
        'h3': '',
        'grid': [12, 12],
        'para': [
                `Cost + Effort + Accuracy = 2formatics.`,
                `"Cost" effective which justifies your investment.`,
                `Our "Effort" will lead you to your success.`,
                `Best "Accuracy" level in the industry.`
              ],
        'btn': ['LEARN MORE', './get-buying-center-insight.html'],
        'imageCardAble': false,
        'imageCard': [],
      }, {
        'id': 'services',
        'classItem': '',
        'imgItemShow': '3',
        'map': false,
        'h2': 'We offer . .',
        'h3': 'SERVICES',
        'grid': [12, 12],
        'para': [
                `We have a list of services that cater to demands of our customers.Our services are based on what our customers need thorough understanding of market scenario and our customer's business.We often adapt to needs of our customers rather than making them adapt through proper understanding of global changes in business scenario.`
              ],
        'btn': ['LEARN MORE', './get-buying-center-insight.html'],
        'imageCardAble': true,
        'imageCard': [{
            href: './about-us.html', text: 'Get Buying Center Insight', alt: 'item alt', src: getBuyingCenterInsightSrc
          }, {
            href: './about-us.html', text: 'Managed Marketing Database', alt: 'item alt', src: managedMarketingDatabaseSrc
          }, {
            href: './about-us.html', text: 'Competitive Intelligence', alt: 'item alt', src: competitiveIntelligenceSrc
          }, {
            href: './about-us.html', text: 'Digital Marketing', alt: 'item alt', src: digitalMarketingSrc
          }, {
            href: './about-us.html', text: 'Database Management', alt: 'item alt', src: databaseManagementSrc
          }, {
            href: './about-us.html', text: 'Website Development', alt: 'item alt', src: websiteDevelopmentSrc
          },
        ],
      }, {
        'id': 'contact_us',
        'classItem': 'base-footer',
        'imgItemShow': '',
        'map': true,
        'h2': 'We are here for helping you . .',
        'h3': 'CONTACT FORM',
        'grid': [12, 12],
        'para': [
                `Found our services interesting. Interested in business with us. `,
                `Do Contact us!!! `
              ],
        'btn': ['LEARN MORE', './get-buying-center-insight.html'],
        'imageCardAble': true,
        'imageCard': [],
      },
    ];
    return (
      <div className="home-page">
        <Header {...this.props} />
        {
          sectionData.map((item, index) => {
            return (<Section key={index} sectionData={item} />)
          })
        }
      </div>
    );
  }
}
export default Home;