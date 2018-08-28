/**
 *
 * City
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  height: 575rem;
  @keyframes sunset {
    0% {
      fill: #ffee58;
      r: 65;
    }
    100% {
      fill: #e0e0e0;
      r: 55;
    }
  }
  @keyframes sunset-detail {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes sunrise {
    0% {
      fill: #e0e0e0;
      r: 55;
    }
    100% {
      fill: #ffee58;
      r: 65;
    }
  }
  @keyframes sunrise-detail {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sky-sunset {
    0% {
      background: #03a9f4;
      fill: #03a9f4;
    }
    100% {
      background: #01579b;
      fill: #01579b;
    }
  }
  @keyframes sky-sunrise {
    0% {
      background: #01579b;
      fill: #01579b;
    }
    100% {
      background: #03a9f4;
      fill: #03a9f4;
    }
  }
  @keyframes skyline-sunset {
    0% {
      fill: #01579b;
      stroke: #01579b;
    }
    100% {
      fill: #263238;
      stroke: #263238;
    }
  }
  @keyframes skyline-sunrise {
    0% {
      fill: #263238;
      stroke: #263238;
    }
    100% {
      fill: #01579b;
      stroke: #01579b;
    }
  }
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

const SvgBuildingMisc = styled.line`
  fill: #ef9a9a;
  stroke: #ef9a9a;
`;

const SvgBuildingWindow = styled.rect`
  fill: #b3e5fc;
`;

const SvgBuildingDH = styled.circle`
  fill: #ffee58;
`;

const SvgBaseC2 = styled.rect`
  fill: #bdbdbd;
  stroke: #bdbdbd;
`;

const SvgBaseC2Polygon = styled.polygon`
  fill: #bdbdbd;
  stroke: #bdbdbd;
`;

const SvgBaseC2Polyline = styled.polyline`
  fill: #bdbdbd;
  stroke: #bdbdbd;
`;

const SvgBaseC2Circle = styled.circle`
  fill: #bdbdbd;
  stroke: #bdbdbd;
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

const SvgTrunk = styled.rect`
  fill: #8d6e63;
`;

const SvgLeavesC1 = styled.circle`
  fill: #66bb6a;
`;

const SvgLeavesC2 = styled.circle`
  ill: #43a047;
`;

const SvgSunset = styled.rect`
  animation: sunset 3s forwards;
  -o-animation: sunset 3s forwards;
  -moz-animation: sunset 3s forwards;
  -webkit-animation: sunset 3s forwards;
`;

const SvgSunsetDetail = styled.rect`
  animation: sunset-detail 3s forwards;
  -o-animation: sunset-detail 3s forwards;
  -moz-animation: sunset-detail 3s forwards;
  -webkit-animation: sunset-detail 3s forwards;
`;

const SvgSunrise = styled.rect`
  animation: sunrise 3s forwards;
  -o-animation: sunrise 3s forwards;
  -moz-animation: sunrise 3s forwards;
  -webkit-animation: sunrise 3s forwards;
`;

const SvgSunriseDetail = styled.rect`
  animation: sunrise-detail 3s forwards;
  -o-animation: sunrise-detail 3s forwards;
  -moz-animation: sunrise-detail 3s forwards;
  -webkit-animation: sunrise-detail 3s forwards;
`;

const SkylineSunset = styled.rect`
  animation: skyline-sunset 3s forwards;
  -o-animation: skyline-sunset 3s forwards;
  -moz-animation: skyline-sunset 3s forwards;
  -webkit-animation: skyline-sunset 3s forwards;
`;

const SkylineSunrise = styled.rect`
  animation: skyline-sunrise 3s forwards;
  -o-animation: skyline-sunrise 3s forwards;
  -moz-animation: skyline-sunrise 3s forwards;
  -webkit-animation: skyline-sunrise 3s forwards;
`;

function City() {
  return (
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
        <SvgBuildingBorderPoly points="135,620 165,620 165,600 135,600 135,640 165,640 165,620" stroke-width="6 " />
        <SvgBuildingMisc x1="130" y1="635" x2="170" y2="635" stroke-width="6 " />
        <SvgBuildingWindow x="205" y="600" width="30px" height="40px " />
        <SvgBuildingBorderPoly points="205,620 235,620 235,600 205,600 205,640 235,640 235,620" stroke-width="6 " />
        <SvgBuildingMisc x1="200" y1="635" x2="240" y2="635" stroke-width="6 " />
        <SvgBuildingWindow x="135" y="680" width="30px" height="40px " />
        <SvgBuildingBorderPoly points="135,700 165,700 165,680 135,680 135,720 165,720 165,700" stroke-width="6 " />
        <SvgBuildingMisc x1="130" y1="715" x2="170" y2="715" stroke-width="6 " />
        <SvgBuildingDressing x="200" y="690" width="30px" height="55px " />
        <SvgBuildingBorderPoly points="200,745 200,690 230,690 230,745" stroke-width="6 " />
        <SvgBaseC2 x="190" y="745" width="50px" height="5px " />
        <SvgBuildingDH cx="210" cy="720" r="3 " />

        {/* trees misc */}
        <SvgTrunk x="85" y="690" width="5px" height="55px " />
        <SvgBaseC2 x="75" y="745" width="25px" height="5px " />
        <SvgLeavesC1 cx="100" cy="675" r="20 " />
        <SvgLeavesC1 cx="85" cy="660" r="20 " />
        <SvgLeavesC2 cx="75" cy="680" r="20 " />
        <SvgBaseC2Polygon points="385,750 390,740 400,740 405,750 " />
        <SvgBaseC2Polyline points="395,745 395,675" stroke-width="5px " />
        <SvgBaseC2Polyline points="390,700 400,700" stroke-width="5px " />
        <SvgBaseC2Circle cx="395" cy="675" r="6 " />
        <SvgBaseC2Polygon points="665,750 670,740 680,740 685,750 " />
        <SvgBaseC2Polyline points="675,745 675,675" stroke-width="5px " />
        <SvgBaseC2Polyline points="670,700 680,700" stroke-width="5px " />
        <SvgBaseC2Circle cx="675" cy="675" r="6 " />
        <SvgTrunk x="1050" y="690" width="5px" height="55px " />
        <SvgBaseC2 x="1040" y="745" width="25px" height="5px " />
        <SvgLeavesC2 cx="1065" cy="675" r="20 " />
        <SvgLeavesC2 cx="1050" cy="660" r="20 " />
        <SvgLeavesC1 cx="1040" cy="680" r="20 " />
        {/* land */}
        <SvgBuildingLand x="0" y="750" width="100%" height="15px" rx="10" ry="10 " />
      </SvgCity>
    </Container>
  );
}

City.propTypes = {};

export default City;
