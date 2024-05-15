
<h2>[2023] POSTRECALL 제작 📝</h2>

> 학습자들이 퀴즈, 개념 정리, 오답 노트를 포스트잇 형식으로 작성하고 중요도를 부여하여 효율적으로 공부하고,<br> 타이핑으로 개념을 익히며 스티커 메모를 활용해 시각적으로 관리할 수 있는 학습 도우미 앱🍀

<div align="center">
  <p>
    <a href="https://storm-maraca-f6d.notion.site/9655604cec554358b4669c28467b7270?v=f3efa33cee574725a8bb68e45f53c2b7&pvs=4">📘노션</a>
    &nbsp; | &nbsp; 
    <a href="https://www.figma.com/file/ZsdWXA6dkvcbYSBJ2lr1Ha/PostRecall?type=design&node-id=0%3A1&mode=design&t=Pohyj3sKNMqumDOf-1">🎨피그마</a>
    &nbsp; | &nbsp; 
    <a href="https://github.com/PostRecall/.github/blob/main/PostRecall%20%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C.pdf">📌발표자료</a>
  </p>
</div>

## 목차
  - [개요](#개요)
  - [주요기능](##주요기능)
  - [DEMO](#DEMO)
  - [주요 화면](#주요-화면)
  - [프로젝트 구조](#프로젝트-구조)
  - [아키텍쳐](#아키텍쳐)

## 1. 개요
### 1-2. 프로젝트 이름
PostRecall📝
### 1-3. 프로젝트 지속기간
2023.08-2023.11
### 1-4. 개발 엔진 및 언어
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![NODE.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
### 1-5. 멤버
|<img src="https://github.com/PostRecall/.github/assets/113195498/4b1427da-ebde-41da-b3e6-03eb87bb9b49" width="130">|<img src="https://github.com/PostRecall/.github/assets/103114387/84ed0eee-f8bf-4908-b76a-8bc05510e956" width="130">|
|:---:|:---:|
|<a href="https://github.com/seyeonparkk">박세연</a>|<a href="https://github.com/mic050r">임지현</a>|

### 1-6. **프로젝트 설명**<br>
  포스트잇 공부법에 대해 아십니까? 포스트잇 공부법은 공부를 돕기 위해 포스트잇을 활용하는 방법입니다.<br> 이 방법을 사용하면 어려운 개념이나 자주 틀리는 문제의 해답을 포스트잇에 적어두고 필요할 때 참고할 수 있어 학습 효율을 높일 수 있습니다.

  그러나 포스트잇 공부법을 사용하면서 몇 가지 문제점을 발견했습니다.
  1. 포스트잇이 구겨지거나 분실되기 쉽다는 문제가 있습니다.
  2. 포스트잇이 너무 분산되어 있어 정리와 관리가 어렵습니다.
  3. 포스트잇은 특정 장소에만 붙어 있어 어디서든 학습 자료를 쉽게 찾기 어렵습니다.

**이러한 문제점을 해결하기 위해 포스트잇 공부법을 디지털 환경으로 옮길 생각입니다.<br> 이를 통해 학습 자료를 중앙화하고 효율적으로 관리할 수 있는 모바일 앱을 개발하려고 합니다. <br>이 앱은 학습자가 언제 어디서나 학습을 할 수 있도록 도와주며, 포스트잇의 한계를 극복하여 더 효과적인 학습을 가능하게 할 것입니다.**


- **개념,오답,퀴즈 중 원하는걸 선택하라! ✅**<br>
사용자는 자신이 어떤 부분에서 취약한지를 선택하고 개념, 오답, 퀴즈 중 자신이 원하는 카테고리를 선택하여 거기에 맞는 포스트잇 공부법으로 학습을 할 수 있습니다.
- **중요도를 선택하라! ⭐** <br>
사용자는 사용자가 선택하기에 어떤 부분이 어떤 정도로 중요한지 선택하여 거기에 맞게 중요도를 선택할 수 있습니다.
- **한번에 정리해서 보라! 😀** <br>
사용자는 자신이 작성한 정리들은 각각의 분야에 맞게 한번에 볼 수 있습니다. 또한 중요도에 맞게 한번에 볼 수도 있습니다. 
- **초보자도 누구나! 👶** <br>
포스트잇 공부법에 익숙하지 않은 누구나 이 앱을 쉽고 간편하게 이용할 수 있습니다.

## 2. **주요 기능**
1. **회원가입 및 로그인 기능**
2. **포스트잇 기능**
    - **개념**
        - 핵심 개념을 정리하고 사용자가 메모를 추가할 수 있는 '개념' 포스트잇 기능.
        - 개념 포스트잇을 폰 위젯으로 추가하여 언제든 확인 가능.
    - **퀴즈**
        - 사용자가 질문과 정답을 입력하여 퀴즈를 생성할 수 있는 '퀴즈' 포스트잇 기능.
        - 메타인지 공부법과 유사한 기능 제공.
    - **오답**
        - '오답노트' 포스트잇을 활용하여 틀린 문제의 오답을 작성하고 복습 가능.
        - 오답 포스트잇을 폰 위젯으로 추가하여 효율적인 학습 가능.
3. **포스트잇 정렬 및 필터 기능**
    - 중요도에 따라 **`⭐`** **`⭐⭐`** **`⭐⭐⭐`**로 표시 가능.
    - 중요도에 따라 내림차순 및 필터 기능으로 특정 중요도의 포스트잇을 확인 가능.
4. **타이핑 화면**
    - 공부나 개념 정리를 위해 타이핑으로 적을 수 있는 화면 제공.
    - 초기화 버튼으로 타이핑 내용을 쉽게 초기화 가능.
5. **이용안내 + 문의사항 추가 및 확인**
    - 앱을 쉽게 사용할 수 있도록 사용법을 적어놓은 이용안내 페이지 제공.
    - 사용자가 문의사항을 추가하고 확인할 수 있는 기능 제공.

   
## 3. DEMO 
[postrecall 시연영상.webm](https://github.com/PostRecall/.github/assets/103114387/302304c3-d1c4-4c4b-9195-4c480ad01e12)


## 4. 프로젝트 구조

## 5. 아키텍쳐 
