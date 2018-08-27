/**
 *
 * City
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  height: 100vh;
`;

const SvgCity = styled.svg`
  background: #03a9f4;
  width: 100%;
  height: 100%;
  min-height: 400px;
`;

const SvgSun = styled.circle`
  fill: #ffee58;
`;

const SvgMoonDetail = styled.circle`
  fill: #bdbdbd;
  opacity: 0;
 `;

const SvgStar = styled.circle`
  fill: #faefbe;
  opacity: 0;
 `;

const SvgSkylinePoly = styled.polygon`
  fill: #01579b;
  stroke: #01579b;
`;

const SvgSkylineLine = styled.line`
  fill: #01579b;
  stroke: #01579b;
`;

const SvgSkylineEllipse = styled.ellipse`
  fill: #01579b;
  stroke: #01579b;
`;

const SvgSkylineTransparent = styled.svg`
  fill: #03a9f4;
`;

const SvgSkylineEllipseTransparent = styled.ellipse`
  fill: #03a9f4;
`;

const SvgBuildingBase = styled.rect`
  fill: #ef5350;
`;

const SvgBuildingBorder = styled.line`
  fill: transparent;
  stroke: #b71c1c;
`;

const SvgBuildingBorderPoly = styled.line`
  fill: transparent;
  stroke: #b71c1c;
`;

const SvgBuildingDressing = styled.rect`
  fill: #c62828;
`;

const SvgBuildingMisc = styled.rect`
  fill: #ef9a9a;
  stroke: #ef9a9a;
`;

const SvgBuildingWindow = styled.rect`
  fill: #b3e5fc;
`;

const SvgBuildingDH = styled.rect`
  fill: #ffee58;
`;

const SvgBuildingLights = styled.rect`
  color: #faefbe;
  fill: #faefbe;
  stroke: #faefbe;
  opacity: 0;
`;

const SvgBuildingLand = styled.rect`
  fill: #d7ccc8;
  stroke: #d7ccc8;
`;

function City() {
  return (
    <div>
      <Container>
        <SvgCity viewBox="0 0 1100 800" shapeRendering="optimizeSpeed" xmlns="http://www.w3.org/2000/svg">
          {/* sky elements  */}
          <SvgSun cx="850" cy="200" r="65" />
          <SvgMoonDetail cx="845" cy="220" r="4" />
          <SvgMoonDetail cx="865" cy="195" r="6" />
          <SvgMoonDetail cx="870" cy="225" r="10" />
          <SvgStar cx="0" cy="200" r="3 " />
          <SvgStar cx="50" cy="50" r="2 " />
          <SvgStar cx="100" cy="100" r="4 " />
          <SvgStar cx="250" cy="75" r="2 " />
          <SvgStar cx="300" cy="200" r="3 " />
          <SvgStar cx="350" cy="300" r="2 " />
          <SvgStar cx="400" cy="150" r="2 " />
          <SvgStar cx="500" cy="100" r="3 " />
          <SvgStar cx="600" cy="200" r="2 " />
          <SvgStar cx="650" cy="50" r="2 " />
          <SvgStar cx="700" cy="300" r="3 " />
          <SvgStar cx="750" cy="150" r="2 " />
          <SvgStar cx="850" cy="75" r="3 " />
          <SvgStar cx="1000" cy="100" r="4 " />
          <SvgStar cx="1050" cy="50" r="2 " />
          <SvgStar cx="1100" cy="175" r="2 " />
          {/* skyline */}
          {/* block 1 */}
          <SvgSkylinePoly points="50,750 50,250 100,235 235,235 275,250 275,750 " />
          <SvgSkylineLine x1="150" y1="240" x2="150" y2="125" stroke-width="6 " />
          <SvgSkylineLine x1="200" y1="240" x2="200" y2="125" x3="235" y3="235" stroke-width="6 " />
          {/* block 2 */}
          <SvgSkylinePoly points="280,750 280,500 317,450 323,450 360,500 360,750 " />
          {/* <text class="lights-tower" x="285" y="520" font-family="Verdana" font-size="16">FOSHAY</text> */}
          <SvgSkylineLine x1="320" y1="430" x2="320" y2="330" stroke-width="3 " />
          <SvgSkylineLine x1="320" y1="450" x2="320" y2="400" stroke-width="5 " />
          {/* block 3 */}
          <SvgSkylinePoly points="435,750 435,375 450,375 450,355 450,315 465,315 465,295 465,275 545,275 545,315 560,315 560,355 560,375 575,375 575,750 " />
          {/* block 4 */}
          <SvgSkylinePoly points="580,750 580,500 615,500 615,475 650,475 650,450 685,450 685,385 750,375 775,385 775,425 800,425 800,450 825,450 825,475 850,475 850,750 " />
          <SvgSkylineLine x1="750" y1="380" x2="750" y2="345" stroke-width="4 " />
          {/* block 5 */}
          <SvgSkylineEllipse cx="990" cy="290" rx="46" ry="9 " />
          <SvgSkylineEllipseTransparent cx="990" cy="295" rx="28" ry="5 " />
          <SvgSkylinePoly points="955,750 955,300 1025,300 1025,750 " />
          <SvgSkylineEllipse cx="990" cy="300" rx="34" ry="5 " />
          <SvgSkylineEllipse cx="990" cy="305" rx="34" ry="7 " />
          <SvgSkylinePoly points="940,750 940,350 1040,350 1040,750 " />
          <SvgSkylineEllipse cx="990" cy="350" rx="50" ry="5 " />
          <SvgSkylineEllipse cx="990" cy="355" rx="50" ry="7 " />
          <SvgSkylinePoly points="925,750 925,450 1050,450 1050,750 " />
          {/* front */}
          {/* block 1 */}


          <SvgBuildingBase x="115" y="550" width="140px" height="200px " />
          <SvgBuildingBorder x1="115" y1="560" x2="255" y2="560" stroke-width="10 " />
          <SvgBuildingDressing x="110" y="545" width="150px" height="15px " />
          <SvgBuildingWindow x="135" y="600" width="30px" height="40px " />
          <SvgBuildingBorderPoly points="135,620 165,620 165,600 135,600 135,640 165,640 165,620"
                    stroke-width="6 " />
          <line className="building-misc" x1="130" y1="635" x2="170" y2="635" stroke-width="6 " />
          <SvgBuildingWindow x="205" y="600" width="30px" height="40px " />
          <SvgBuildingBorderPoly points="205,620 235,620 235,600 205,600 205,640 235,640 235,620"
                    stroke-width="6 " />
          <line className="building-misc" x1="200" y1="635" x2="240" y2="635" stroke-width="6 " />
          <SvgBuildingWindow x="135" y="680" width="30px" height="40px " />
          <SvgBuildingBorderPoly points="135,700 165,700 165,680 135,680 135,720 165,720 165,700"
                    stroke-width="6 " />
          <line className="building-misc" x1="130" y1="715" x2="170" y2="715" stroke-width="6 " />
          <SvgBuildingDressing x="200" y="690" width="30px" height="55px " />
          <SvgBuildingBorderPoly points="200,745 200,690 230,690 230,745" stroke-width="6 " />
          <rect className="base-c2" x="190" y="745" width="50px" height="5px " />
          <circle className="building-d-h" cx="210" cy="720" r="3 " />
          {/* block 2 */}
          <SvgBuildingBase x="255" y="650" width="140px" height="100px " />
          <SvgBuildingBorder x1="255" y1="650" x2="395" y2="650" stroke-width="10 " />
          <polygon className="building-dressing" points="255,650 395,650 380,600 270,600 " />
          <SvgBuildingWindow x="340" y="680" width="30px" height="40px " />
          <SvgBuildingBorderPoly points="340,700 370,700 370,680 340,680 340,720 370,720 370,700"
                    stroke-width="6 " />
          <line className="building-misc" x1="335" y1="715" x2="375" y2="715" stroke-width="6 " />
          <rect className="base-c2" x="340" y="590" width="30px" height="10px " />
          <rect className="base-c3" x="340" y="580" width="30px" height="10px " />
          <SvgBuildingDressing x="280" y="690" width="30px" height="55px " />
          <SvgBuildingBorderPoly points="280,745 280,690 310,690 310,745" stroke-width="6 " />
          <rect className="base-c2" x="270" y="745" width="50px" height="5px " />
          <circle className="building-d-h" cx="300" cy="720" r="3 " />
          {/* block 3 */}
          <SvgBuildingBase x="395" y="550" width="280px" height="200px " />
          <SvgBuildingBorder x1="395" y1="560" x2="675" y2="560" stroke-width="10 " />
          <SvgBuildingDressing x="385" y="545" width="300px" height="15px " />
          <SvgBuildingBorder x1="395" y1="590" x2="675" y2="590" stroke-width="10 " />
          <SvgBuildingDressing x="390" y="575" width="290px" height="15px " />
          <SvgBuildingWindow x="430" y="610" width="25px" height="50px " />
          <SvgBuildingBorderPoly points="430,610 455,610 455,660 430,660 430,610" stroke-width="4 " />
          <SvgBuildingBorderPoly points="430,630 455,630" stroke-width="4 " />
          <SvgBuildingBorderPoly points="442.5,610 442.5,660" stroke-width="4 " />
          <line className="building-misc" x1="425" y1="605" x2="460" y2="605" stroke-width="6 " />
          <line className="building-misc" x1="425" y1="656" x2="460" y2="656" stroke-width="6 " />
          <SvgBuildingWindow x="490" y="610" width="25px" height="50px " />
          <SvgBuildingBorderPoly points="490,610 515,610 515,660 490,660 490,610" stroke-width="4 " />
          <SvgBuildingBorderPoly points="490,630 515,630" stroke-width="4 " />
          <SvgBuildingBorderPoly points="502.5,610 502.5,660" stroke-width="4 " />
          <line className="building-misc" x1="485" y1="605" x2="520" y2="605" stroke-width="6 " />
          <line className="building-misc" x1="485" y1="656" x2="520" y2="656" stroke-width="6 " />
          <SvgBuildingWindow x="550" y="610" width="25px" height="50px " />
          <SvgBuildingBorderPoly points="550,610 575,610 575,660 550,660 550,610" stroke-width="4 " />
          <SvgBuildingBorderPoly points="550,630 575,630" stroke-width="4 " />
          <SvgBuildingBorderPoly points="562.5,610 562.5,660" stroke-width="4 " />
          <line className="building-misc" x1="545" y1="605" x2="580" y2="605" stroke-width="6 " />
          <line className="building-misc" x1="545" y1="656" x2="580" y2="656" stroke-width="6 " />
          <SvgBuildingWindow x="610" y="610" width="25px" height="50px " />
          <SvgBuildingBorderPoly points="610,610 635,610 635,660 610,660 610,610" stroke-width="4 " />
          <SvgBuildingBorderPoly points="610,630 635,630" stroke-width="4 " />
          <SvgBuildingBorderPoly points="622.5,610 622.5,660" stroke-width="4 " />
          <line className="building-misc" x1="605" y1="605" x2="640" y2="605" stroke-width="6 " />
          <line className="building-misc" x1="605" y1="656" x2="640" y2="656" stroke-width="6 " />
          <SvgBuildingWindow x="430" y="680" width="25px" height="50px " />
          <SvgBuildingBorderPoly points="430,680 455,680 455,730 430,730 430,680" stroke-width="4 " />
          <SvgBuildingBorderPoly points="430,700 455,700" stroke-width="4 " />
          <SvgBuildingBorderPoly points="442.5,680 442.5,730" stroke-width="4 " />
          <line className="building-misc" x1="425" y1="675" x2="460" y2="675" stroke-width="6 " />
          <line className="building-misc" x1="425" y1="726" x2="460" y2="726" stroke-width="6 " />
          <SvgBuildingWindow x="610" y="680" width="25px" height="50px " />
          <SvgBuildingBorderPoly points="610,680 635,680 635,730 610,730 610,680" stroke-width="4 " />
          <SvgBuildingBorderPoly points="610,700 635,700" stroke-width="4 " />
          <SvgBuildingBorderPoly points="622.5,680 622.5,730" stroke-width="4 " />
          <line className="building-misc" x1="605" y1="675" x2="640" y2="675" stroke-width="6 " />
          <line className="building-misc" x1="605" y1="726" x2="640" y2="726" stroke-width="6 " />
          <SvgBuildingDressing x="502.5" y="690" width="30px" height="55px " />
          <SvgBuildingDressing x="532.5" y="690" width="30px" height="55px " />
          <SvgBuildingBorderPoly points="502.5,745 502.5,690 562.5,690 562.5,745" stroke-width="6 " />
          <SvgBuildingBorderPoly points="532.5,745 532.5,690" stroke-width="6 " />
          <rect className="base-c2" x="492.5" y="745" width="80px" height="5px " />
          <circle className="building-d-h" cx="522.5" cy="720" r="3 " />
          <circle className="building-d-h" cx="542.5" cy="720" r="3 " />
          {/* block 4 */}
          <SvgBuildingBase x="675" y="650" width="210px" height="100px " />
          <SvgBuildingBase x="710" y="550" width="140px" height="100px " />
          <SvgBuildingBorder x1="710" y1="560" x2="850" y2="560" stroke-width="10 " />
          <SvgBuildingDressing x="705" y="545" width="150px" height="15px " />
          <SvgBuildingBorder x1="675" y1="650" x2="885" y2="650" stroke-width="10 " />
          <SvgBuildingDressing x="675" y="635" width="210px" height="15px " />
          <SvgBuildingWindow x="720" y="580" width="30px" height="40px " />
          <SvgBuildingBorderPoly points="720,600 750,600 750,580 720,580 720,620 750,620 750,600"
                    stroke-width="6 " />
          <line className="building-misc" x1="715" y1="615" x2="755" y2="615" stroke-width="6 " />
          <SvgBuildingWindow x="765" y="580" width="30px" height="40px " />
          <SvgBuildingBorderPoly points="765,600 795,600 795,580 765,580 765,620 795,620 795,600"
                    stroke-width="6 " />
          <line className="building-misc" x1="760" y1="615" x2="800" y2="615" stroke-width="6 " />
          <SvgBuildingWindow x="810" y="580" width="30px" height="40px " />
          <SvgBuildingBorderPoly points="810,600 840,600 840,580 810,580 810,620 840,620 840,600"
                    stroke-width="6 " />
          <line className="building-misc" x1="805" y1="615" x2="845" y2="615" stroke-width="6 " />
          <SvgBuildingWindow x="700" y="680" width="30px" height="40px " />
          <SvgBuildingBorderPoly points="700,700 730,700 730,680 700,680 700,720 730,720 730,700"
                    stroke-width="6 " />
          <line className="building-misc" x1="695" y1="715" x2="735" y2="715" stroke-width="6 " />
          <SvgBuildingWindow x="830" y="680" width="30px" height="40px " />
          <SvgBuildingBorderPoly points="830,700 860,700 860,680 830,680 830,720 860,720 860,700"
                    stroke-width="6 " />
          <line className="building-misc" x1="825" y1="715" x2="865" y2="715" stroke-width="6 " />
          <SvgBuildingDressing x="765" y="690" width="30px" height="55px " />
          <SvgBuildingBorderPoly points="765,745 765,690 795,690 795,745" stroke-width="6 " />
          <rect className="base-c2" x="755" y="745" width="50px" height="5px " />
          <circle className="building-d-h" cx="775" cy="720" r="3 " />
          {/* block 5 */}
          <SvgBuildingBase x="885" y="550" width="140px" height="200px " />
          <SvgBuildingBorder x1="885" y1="560" x2="1025" y2="560" stroke-width="10 " />
          <SvgBuildingDressing x="880" y="545" width="150px" height="15px " />
          <SvgBuildingWindow x="900" y="575" width="45px" height="50px " />
          <SvgBuildingBorderPoly points="900,625 900,575 945,575 945,625 900,625" stroke-width="4 " />
          <SvgBuildingBorderPoly points="900,610 900,590 945,590 945,610 900,610" stroke-width="4 " />
          <SvgBuildingBorderPoly points="922.5,575 922.5,625" stroke-width="4 " />
          <SvgBuildingWindow x="965" y="575" width="45px" height="50px " />
          <SvgBuildingBorderPoly points="965,625 965,575 1010,575 1010,625 965,625" stroke-width="4 " />
          <SvgBuildingBorderPoly points="965,610 965,590 1010,590 1010,610 965,610" stroke-width="4 " />
          <SvgBuildingBorderPoly points="986.5,575 986.5,625" stroke-width="4 " />
          <SvgBuildingWindow x="965" y="660" width="45px" height="50px " />
          <SvgBuildingBorderPoly points="965,710 965,660 1010,660 1010,710 965,710" stroke-width="4 " />
          <SvgBuildingBorderPoly points="965,695 965,675 1010,675 1010,695 965,695" stroke-width="4 " />
          <SvgBuildingBorderPoly points="986.5,660 986.5,710" stroke-width="4 " />
          <SvgBuildingDressing x="910" y="690" width="30px" height="55px " />
          <SvgBuildingBorderPoly points="910,745 910,690 940,690 940,745" stroke-width="6 " />
          <rect className="base-c2" x="900" y="745" width="50px" height="5px " />
          <circle className="building-d-h" cx="930" cy="720" r="3 " />
          {/* trees misc */}
          <rect className="trunk" x="85" y="690" width="5px" height="55px " />
          <rect className="base-c2" x="75" y="745" width="25px" height="5px " />
          <circle className="leaves-c1" cx="100" cy="675" r="20 " />
          <circle className="leaves-c1" cx="85" cy="660" r="20 " />
          <circle className="leaves-c2" cx="75" cy="680" r="20 " />
          <polygon className="base-c2" points="385,750 390,740 400,740 405,750 " />
          <polyline className="base-c2" points="395,745 395,675" stroke-width="5px " />
          <polyline className="base-c2" points="390,700 400,700" stroke-width="5px " />
          <circle className="base-c2" cx="395" cy="675" r="6 " />
          <polygon className="base-c2" points="665,750 670,740 680,740 685,750 " />
          <polyline className="base-c2" points="675,745 675,675" stroke-width="5px " />
          <polyline className="base-c2" points="670,700 680,700" stroke-width="5px " />
          <circle className="base-c2" cx="675" cy="675" r="6 " />
          <rect className="trunk" x="1050" y="690" width="5px" height="55px " />
          <rect className="base-c2" x="1040" y="745" width="25px" height="5px " />
          <circle className="leaves-c2" cx="1065" cy="675" r="20 " />
          <circle className="leaves-c2" cx="1050" cy="660" r="20 " />
          <circle className="leaves-c1" cx="1040" cy="680" r="20 " />
          {/* land */}
          <rect className="land" x="0" y="750" width="100%" height="15px" rx="10" ry="10 " />
        </SvgCity>
      </Container>
    </div>
  );
}

City.propTypes = {};

export default City;
