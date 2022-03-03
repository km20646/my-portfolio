<template>
    <v-main>
        <v-card elevation="0" class="intro">
            <v-overlay absolute opacity="0.7" class="rounded-0" z-index="1">
                <v-list-item-title class="text-lg-h3 text-h4 text-center mb-3 font-weight-bold">이재혁</v-list-item-title>
                <v-list-item-subtitle class="text-lg-h5 text-h6 text-center font-weight-bold">Front-End Developer</v-list-item-subtitle>
                <div style="width: 80px; margin: 30px auto; height: 4px" class="deep-orange lighten-1 rounded-0"></div>
                <div class="px-5">
                    <div class="text-center font-weight-bold text-h6">" 문과 출신 데이터 분석가에서 프론트엔드 개발자로 "</div>
                    <div class="text-center font-weight-bold mt-4 text-body-2 text-lg-body-1">깔끔하면서도 아름다운 인터페이스로 페이지를 보는 이들에게 좋은 경험을 선사하고자 노력하고 있습니다.</div>
                    <div class="text-center font-weight-bold mt-1 text-body-2 text-lg-body-1">이를 위해 새로운 기술과 트렌드를 익히고 적용하는 것을 좋아합니다.</div>
                    <div class="text-center mt-9"><v-btn large color="deep-orange lighten-1" class="white--text font-weight-bold" depressed href="#skills">자세히보기</v-btn></div>
                </div>
            </v-overlay>
        </v-card>
        <!-- skills -->
        <div class="grey lighten-4 pb-10 pt-6" id="skills">
            <h5 class="mb-10 pt-10 text-center text-h4 text-lg-h3 font-weight-bold">
                Skills
                <v-tooltip bottom color="primary">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon color="deep-orange" dark v-bind="attrs" v-on="on" style="cursor: pointer">mdi-help-circle</v-icon>
                    </template>
                    <div class="font-weight-bold">1 : 기초수준</div>
                    <div class="font-weight-bold">2 : 취미수준</div>
                    <div class="font-weight-bold">3 : Prototype~Production 사이 개발 수준</div>
                    <div class="font-weight-bold">4 : Production 개발 수준 이상</div>
                </v-tooltip>
            </h5>
            <v-row class="px-5">
                <v-col cols="12" lg="6" xl="6">
                    <v-card elevation="5" class="pa-5 rounded-lg">
                        <v-list-item-title class="text-h5 ml-3 mb-2 font-weight-bold">Front-End</v-list-item-title>
                        <div style="width: 100%; height: 2px" class="deep-orange lighten-1 rounded-0"></div>
                        <div class="mt-8">
                            <v-item-group>
                                <v-row>
                                    <v-col>
                                        <v-item>
                                            <v-card elevation="0" align="center" style="max-height: 100px">
                                                <v-badge bottom content="4" color="deep-orange" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/jquery.png" style="height: 80px; width: 90px"> </v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                    <v-col>
                                        <v-item>
                                            <v-card elevation="0" align="center" style="max-height: 100px">
                                                <v-badge bottom content="4" color="deep-orange" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/html5.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                    <v-col>
                                        <v-item>
                                            <v-card elevation="0" align="center" style="max-height: 100px">
                                                <v-badge bottom content="4" color="deep-orange" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/css3.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                    <v-col>
                                        <v-item>
                                            <v-card elevation="0" align="center">
                                                <v-badge bottom content="4" color="deep-orange" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/javascript.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                    <v-col>
                                        <v-item>
                                            <v-card elevation="0" align="center">
                                                <v-badge bottom content="3" color="deep-orange lighten-3" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/Vue.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                </v-row>
                            </v-item-group>
                        </div>
                    </v-card>
                </v-col>
                <!-- backend -->
                <v-col cols="12" lg="6" xl="6">
                    <v-card elevation="5" class="pa-5 rounded-lg">
                        <v-list-item-title class="text-h5 ml-3 mb-2 font-weight-bold">Back-End</v-list-item-title>
                        <div style="width: 100%; height: 2px" class="deep-orange lighten-1 rounded-0"></div>
                        <div class="mt-8">
                            <v-item-group>
                                <v-row>
                                    <v-col>
                                        <v-item>
                                            <v-card elevation="0" align="center" style="max-height: 100px">
                                                <v-badge bottom content="3" color="deep-orange" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/nodejs.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                    <v-col>
                                        <v-item>
                                            <v-card elevation="0" align="center" style="max-height: 100px">
                                                <v-badge bottom content="3" color="deep-orange" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/express.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                    <v-col>
                                        <v-item>
                                            <v-card elevation="0" align="center" style="max-height: 100px">
                                                <v-badge bottom content="2" color="grey" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/postgres.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                    <v-col>
                                        <v-item>
                                            <v-card elevation="0" align="center" style="max-height: 100px">
                                                <v-badge bottom content="1" color="grey" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/mysql.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                </v-row>
                            </v-item-group>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <!-- 2번째 라인 -->
            <v-row class="px-5">
                <!-- deployment -->
                <v-col sm="6" lg="5">
                    <v-card elevation="5" class="pa-5 rounded-lg">
                        <v-list-item-title class="text-h5 ml-3 mb-2 font-weight-bold">Deployment</v-list-item-title>

                        <div style="width: 100%; height: 2px" class="deep-orange lighten-1 rounded-0"></div>
                        <div class="mt-8">
                            <v-item-group>
                                <v-row>
                                    <v-col cols="6">
                                        <v-item>
                                            <v-card elevation="0" align="center" style="max-height: 100px">
                                                <v-badge bottom content="1" color="grey" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/aws.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-item>
                                            <v-card elevation="0" align="center" style="max-height: 100px">
                                                <v-badge bottom content="1" color="grey" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/firebase.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                </v-row>
                            </v-item-group>
                        </div>
                    </v-card>
                </v-col>
                <!-- vc -->
                <v-col sm="6" lg="5">
                    <v-card elevation="5" class="pa-5 rounded-lg">
                        <v-list-item-title class="text-h5 ml-3 mb-2 font-weight-bold">Version Control</v-list-item-title>
                        <div style="width: 100%; height: 2px" class="deep-orange lighten-1 rounded-0"></div>
                        <div class="mt-8">
                            <v-item-group>
                                <v-row>
                                    <v-col>
                                        <v-item>
                                            <v-card elevation="0" align="center" style="max-height: 100px">
                                                <v-badge bottom content="4" color="deep-orange" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/gitlab.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                    <v-col>
                                        <v-item>
                                            <v-card elevation="0" align="center" style="max-height: 100px">
                                                <v-badge bottom content="2" color="grey" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/github.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                    <v-col>
                                        <v-item>
                                            <v-card elevation="0" align="center" style="max-height: 100px">
                                                <v-badge bottom content="4" color="deep-orange" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/sourcetree.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                </v-row>
                            </v-item-group>
                        </div>
                    </v-card>
                </v-col>
                <!-- etc -->
                <v-col sm="6" lg="2">
                    <v-card elevation="5" class="pa-5 rounded-lg">
                        <v-list-item-title class="text-h5 ml-3 mb-2 font-weight-bold">ETC</v-list-item-title>
                        <div style="width: 100%; height: 2px" class="deep-orange lighten-1 rounded-0"></div>
                        <div class="mt-8">
                            <v-item-group>
                                <v-row>
                                    <v-col>
                                        <v-item>
                                            <v-card elevation="0" align="center" style="max-height: 100px">
                                                <v-badge bottom content="4" color="deep-orange" class="font-weight-bold" overlap>
                                                    <v-img contain src="../assets/tableau.png" style="height: 80px; width: 90px"></v-img>
                                                </v-badge>
                                            </v-card>
                                        </v-item>
                                    </v-col>
                                </v-row>
                            </v-item-group>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <!-- portfolio -->
        <div id="projects">
            <template>
                <v-card color="black darken-1" dark flat tile>
                    <v-list-item-title class="text-h4 text-lg-h3 text-center pb-6 pt-11 font-weight-bold">PROJECTS</v-list-item-title>
                    <v-row>
                        <v-col cols="12" lg="6" fill-height>
                            <v-card color="white" class="ma-2 rounded-lg black--text pt-7 px-3" height="100%">
                                <v-row>
                                    <v-list-item-title class="text-h6 text-lg-h5 text-center font-weight-bold pt-3 text-wrap">AI기반 상위 고객 분석 솔루션</v-list-item-title>
                                    <v-list-item-subtitle class="text-center mt-2 text-wrap">
                                        <v-chip color="deep-orange lighten-1" small class="mx-1">jQuery</v-chip>
                                        <v-chip color="deep-orange lighten-1" small class="mx-1">Javascript</v-chip>
                                        <v-chip color="deep-orange lighten-1" small class="mx-1">Express.js</v-chip>
                                        <v-chip color="deep-orange lighten-1" small class="mx-1 mt-1 mt-sm-0">Scss</v-chip>
                                        <v-chip color="deep-orange lighten-1" small class="mx-2 mt-1 mt-sm-0">Bootstrap</v-chip>
                                    </v-list-item-subtitle>
                                    <v-col sm="12">
                                        <v-simple-table light>
                                            <template v-slot:default>
                                                <tbody>
                                                    <tr>
                                                        <th>진행기간</th>
                                                        <td>2021.05 ~ 진행중</td>
                                                    </tr>
                                                    <tr>
                                                        <th>개발환경</th>
                                                        <td>VS Code, Gitlab, Sourcetree</td>
                                                    </tr>
                                                    <tr>
                                                        <th>개발언어</th>
                                                        <td>쿠폰/유저 모듈(jQuery), 메시징 모듈(Vue.js--외주개발 후 인계)</td>
                                                    </tr>
                                                    <tr>
                                                        <th>업무설명</th>
                                                        <td>쇼핑몰 솔루션 내 AI 기반 CRM 솔루션 개발</td>
                                                    </tr>
                                                    <tr>
                                                        <th>상세업무(FRONT)</th>
                                                        <td>jQuery,scss를 활용한 UI 개발</td>
                                                    </tr>
                                                    <tr>
                                                        <th rowspan="2">상세업무(BACK)</th>
                                                        <td>Express.js(Node.js)를 활용한 REST API 개발</td>
                                                    </tr>
                                                    <tr>
                                                        <td>FRONT-END 화면에서 사용되는 고객/쿠폰/메시지 데이터를 전송해주는 기능 개발</td>
                                                    </tr>
                                                    <tr>
                                                        <th>링크</th>
                                                        <td><a href="https://ninecube.kr" target="_blank">https://ninecube.kr</a></td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="12" lg="6" fill-height>
                            <v-card color="white" class="ma-2 rounded-lg black--text pt-7 px-3" height="100%">
                                <v-row>
                                    <v-list-item-title class="text-h6 text-lg-h5 text-center font-weight-bold pt-3 text-wrap">AI기반 상위 고객 분석 솔루션 프로토타이핑</v-list-item-title>
                                    <v-list-item-subtitle class="text-center mt-2">
                                        <v-chip color="deep-orange lighten-1" small class="mx-1">Tableau</v-chip>
                                        <v-chip color="deep-orange lighten-1" small class="mx-1">jQuery</v-chip>
                                    </v-list-item-subtitle>
                                    <v-col sm="12">
                                        <v-simple-table light>
                                            <template v-slot:default>
                                                <tbody>
                                                    <tr>
                                                        <th>진행기간</th>
                                                        <td>2021.01 ~ 2021.04</td>
                                                    </tr>
                                                    <tr>
                                                        <th>개발환경</th>
                                                        <td>Tableau Desktop, Tableau Server, VS Code</td>
                                                    </tr>
                                                    <tr>
                                                        <th>개발언어(프로그램)</th>
                                                        <td>Javascript(jQuery), Tableau Desktop</td>
                                                    </tr>
                                                    <tr>
                                                        <th style="min-width: 150px">업무설명</th>
                                                        <td>AI기반 고객 솔루션 프로토타이핑 화면 개발</td>
                                                    </tr>
                                                    <tr>
                                                        <th>상세업무(FRONT-1)</th>
                                                        <td>Tableau 내장 기능을 활용하여 UI 개발</td>
                                                    </tr>
                                                    <tr>
                                                        <th>상세업무(FRONT-2)</th>
                                                        <td>Tableau 내장기능으로 구현 불가능한 경우, Tableau Extension API를 활용하여 javascript로 개발</td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-card color="white" class="ma-2 rounded-lg black--text pt-7 px-3" height="100%">
                                <v-row>
                                    <v-list-item-title class="text-h6 text-lg-h5 text-center font-weight-bold pt-3 text-wrap">사내 AI 매칭 현황 조회 화면 개발</v-list-item-title>
                                    <v-list-item-subtitle class="text-center mt-2">
                                        <v-chip color="deep-orange lighten-1" small class="mx-1">jQuery</v-chip>
                                        <v-chip color="deep-orange lighten-1" small class="mx-1">Javascript</v-chip>
                                        <v-chip color="deep-orange lighten-1" small class="mx-2">Bootstrap</v-chip>
                                    </v-list-item-subtitle>
                                    <v-col sm="12">
                                        <v-simple-table light>
                                            <template v-slot:default>
                                                <tbody>
                                                    <tr>
                                                        <th>진행기간</th>
                                                        <td>2020.05 ~ 2021.03</td>
                                                    </tr>
                                                    <tr>
                                                        <th>개발환경</th>
                                                        <td>VS Code, Gitlab, Sourcetree</td>
                                                    </tr>
                                                    <tr>
                                                        <th>개발언어</th>
                                                        <td>Javascript(jQuery)</td>
                                                    </tr>
                                                    <tr>
                                                        <th style="min-width: 130px">업무설명</th>
                                                        <td>상품간 오매칭, 중복상품, 유사모델분류기 등 AI기반으로 행해진 결과들의 통계 및 현황을 조회할 수 있는 화면 개발</td>
                                                    </tr>
                                                    <tr>
                                                        <th>상세업무(FRONT)</th>
                                                        <td>jQuery, css를 활용한 UI 개발</td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-card color="white" class="ma-2 rounded-lg black--text pt-7 px-3" height="100%">
                                <v-row>
                                    <v-list-item-title class="text-h6 text-lg-h5 text-center font-weight-bold pt-3 text-wrap">AI기반 쇼핑 도우미 프로토타이핑(2차)</v-list-item-title>
                                    <v-list-item-subtitle class="text-center mt-2">
                                        <v-chip color="deep-orange lighten-1" small class="mx-1">Vue.js</v-chip>
                                        <v-chip color="deep-orange lighten-1" small class="mx-1">Express.js</v-chip>
                                        <v-chip color="deep-orange lighten-1" small class="mx-2">Vuetify</v-chip>
                                    </v-list-item-subtitle>
                                    <v-col sm="12">
                                        <v-simple-table light>
                                            <template v-slot:default>
                                                <tbody>
                                                    <tr>
                                                        <th>진행기간</th>
                                                        <td>2021.12 ~ 2022.01</td>
                                                    </tr>
                                                    <tr>
                                                        <th>개발환경</th>
                                                        <td>VS Code, Gitlab, Sourcetree</td>
                                                    </tr>
                                                    <tr>
                                                        <th>개발언어</th>
                                                        <td>Vue.js(FRONT), Express.js(BACK)</td>
                                                    </tr>
                                                    <tr>
                                                        <th style="min-width: 130px">업무설명</th>
                                                        <td>회사 서비스 반영 전, 여러 분석 기법이 들어간 시각화 화면 테스트를 위한 SPA 개발</td>
                                                    </tr>
                                                    <tr>
                                                        <th>상세업무(FRONT)</th>
                                                        <td>Vue.js(vuetify)를 활용한 UI 개발</td>
                                                    </tr>
                                                    <tr>
                                                        <th rowspan="2">상세업무(BACK)</th>
                                                        <td>Express(Node.js)를 활용한 REST API 개발</td>
                                                    </tr>
                                                    <tr>
                                                        <td>FRONT-END 화면에서 사용되는 고객/상품 데이터를 전송하는 기능 개발</td>
                                                    </tr>
                                                    <tr></tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-card color="white" class="ma-2 rounded-lg black--text pt-7 px-3" height="100%">
                                <v-row>
                                    <v-list-item-title class="text-h6 text-lg-h5 text-center font-weight-bold pt-3 text-wrap">AI기반 쇼핑 도우미 프로토타이핑(1차)</v-list-item-title>
                                    <v-list-item-subtitle class="text-center mt-2">
                                        <v-chip color="deep-orange lighten-1" small class="mx-1">Tableau</v-chip>
                                    </v-list-item-subtitle>
                                    <v-col sm="12">
                                        <v-simple-table light>
                                            <template v-slot:default>
                                                <tbody>
                                                    <tr>
                                                        <th>진행기간</th>
                                                        <td>2019.09 ~ 2020.02</td>
                                                    </tr>
                                                    <tr>
                                                        <th>개발환경</th>
                                                        <td>Tableau Desktop, Tableau Server</td>
                                                    </tr>
                                                    <tr>
                                                        <th style="min-width: 130px">업무설명</th>
                                                        <td>유저 구매 데이터를 가공하여 초개인화된 시각화 화면 개발</td>
                                                    </tr>
                                                    <tr>
                                                        <th>상세업무</th>
                                                        <td>Tableau 내장 함수,기능들을 활용하여 달력, 차트 등 컴포넌트 개발</td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-card color="white" class="ma-2 rounded-lg black--text pt-7 px-3" height="100%">
                                <v-row>
                                    <v-list-item-title class="text-h6 text-lg-h5 text-center font-weight-bold pt-3 text-wrap">Trendview(시장 트렌드분석) 프로토타이핑 프로젝트</v-list-item-title>
                                    <v-list-item-subtitle class="text-center mt-2">
                                        <v-chip color="deep-orange lighten-1" small class="mx-1">Tableau</v-chip>
                                    </v-list-item-subtitle>
                                    <v-col sm="12">
                                        <v-simple-table light>
                                            <template v-slot:default>
                                                <tbody>
                                                    <tr>
                                                        <th>진행기간</th>
                                                        <td>2020.02 ~ 2020.05</td>
                                                    </tr>
                                                    <tr>
                                                        <th>개발환경</th>
                                                        <td>Tableau Desktop, Tableau Server</td>
                                                    </tr>
                                                    <tr>
                                                        <th style="min-width: 130px">업무설명</th>
                                                        <td>유저 구매 데이터를 가공하여 시장 트렌드 분석 화면 개발</td>
                                                    </tr>
                                                    <tr>
                                                        <th>상세업무</th>
                                                        <td>Tableau 내장 함수,기능들을 활용하여 달력, 차트 등 컴포넌트 개발</td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="12">
                            <v-card color="white" class="ma-2 rounded-lg black--text pt-7 px-3 mb-8">
                                <v-row>
                                    <v-list-item-title class="text-h6 text-lg-h5 text-center font-weight-bold pt-3 text-wrap">사내 판매데이터 시각화 화면 개발</v-list-item-title>
                                    <v-list-item-subtitle class="text-center mt-2">
                                        <v-chip color="deep-orange lighten-1" small class="mx-1">Tableau</v-chip>
                                    </v-list-item-subtitle>
                                    <v-col sm="12">
                                        <v-simple-table light>
                                            <template v-slot:default>
                                                <tbody>
                                                    <tr>
                                                        <th>진행기간</th>
                                                        <td>2020.02 ~ 2020.05</td>
                                                    </tr>
                                                    <tr>
                                                        <th>개발환경</th>
                                                        <td>Tableau Desktop, Tableau Server</td>
                                                    </tr>
                                                    <tr>
                                                        <th style="min-width: 130px">업무설명</th>
                                                        <td>광고팀에서 내부분석 및 제휴사 미팅시 활용할 시각화 화면 개발</td>
                                                    </tr>
                                                    <tr>
                                                        <th>상세업무</th>
                                                        <td>Tableau 내장 함수,기능들을 활용하여 달력, 차트 등 컴포넌트 개발</td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </template>
        </div>
    </v-main>
</template>

<script>
    export default {
        data() {
            return {
                length: 4,
                onboarding: "",
            };
        },
        methods: {
            next() {
                this.onboarding = this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
            },
            prev() {
                this.onboarding = this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
            },
        },
    };
</script>

<style>
    .intro {
        background: #cc33ff url("../assets/bg.jpg");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 600px;
    }
    @media screen and (max-width: 490px) {
        table tr {
            max-width: 100% !important;
            position: relative !important;
            display: block !important;
        }
        table th {
            border-bottom: none !important;
            padding: 0 !important;
        }
        table tr td {
            display: flex !important;
            width: 100% !important;
            border-bottom: 1px solid #f5f5f5 !important;
            height: auto !important;
            padding: 0 !important;
            font-size: 0.75rem !important;
        }
        .dotGroup {
            display: none !important;
        }
    }
</style>
