<template>
  <div id="writingWrapper" class="WritingRoomWrapper">
    <div class="animationWrapper">
      <div class="svgWrapper">
        <svg class="svg">
          <path class="svgPath" d="M 0 0 H 10000 0" />
          <!-- <circle class="svgCircle" r="20">
            <animateMotion dur="20s" repeatCount="indefinite" path="M 0 0 H 10000 0" />
          </circle> -->
        </svg>
      </div>
    </div>
    <div class="FileLibrary" v-if="!filesHidden">
      <h4 class="FilesTitle">Files</h4>
      <table class="FileTree"
      v-for="(file, index) in writingContent"
      :key="index">
        <tr>
          <td v-on:click="clickFile(index)">{{ file.fileName }}</td>
        </tr>
      </table>
    </div>
    <div class="hideFilesWrapper">
      <button class="hideFilesButton" v-on:click="hideFiles"><font-awesome-icon icon="angle-right" v-if="filesHidden" /><font-awesome-icon icon="angle-left" v-else /></button>
    </div>
    <textarea class="WritingSpace" id="writingSpace" placeholder="Enter your world here..." v-on:change="writingContentChanged"></textarea>
    <div class="hideFormatWrapper">
      <button class="hideFormatButton" v-on:click="hideFormat"><font-awesome-icon icon="angle-left" v-if="formatHidden" /><font-awesome-icon icon="angle-right" v-else /></button>
    </div>
    <div class="FormatWrapper" v-if="!formatHidden">
      <p class="fontSizeIndicator" id="fontSizeIndicator">{{ fontSize }}</p>
      <input type="range" class="fontSizeSlider" id="fontSizeSlider" defaultValue="fontSize" v-on:change="fontSizeChanged" min="12" max="40" step="1">
      <button class="fontChoiceButton Quicksand" v-on:click="changeFont('Quicksand')">Quicksand</button>
      <button class="fontChoiceButton Caveat" v-on:click="changeFont('Caveat')">Caveat</button>
      <button class="fontChoiceButton Handlee" v-on:click="changeFont('Handlee')">Handlee</button>
      <button class="fontChoiceButton Tangerine" v-on:click="changeFont('Tangerine')">Tangerine</button>
      <button class="fontChoiceButton Palanquin" v-on:click="changeFont('Palanquin')">Palanquin</button>
      <button class="fontChoiceButton Harmattan" v-on:click="changeFont('Harmattan')">Harmattan</button>
      <button class="fontChoiceButton NunitoSans" v-on:click="changeFont('Nunito Sans')">Nunito Sans</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WritingRoom',
    computed: {
      writingContent() {
        return this.$store.state.writingContent;
      },
      selectedFile() {
        return this.$store.state.selectedFile;
      }
    },
    data() {
      return {
        filesHidden: true,
        formatHidden: true,
        fontSize: 18,
        files: [
          'Chapter 1',
          'Chapter 2',
          'Chapter 3'
        ]
      }
    },
    methods: {
      hideFiles: function() {
        this.filesHidden = !this.filesHidden;
        // this.reCalcWritingBorderWidth();
      },
      hideFormat: function() {
        this.formatHidden = !this.formatHidden;
        // this.reCalcWritingBorderWidth();
      },
      changeFont: function(fontName) {
        let style = null;
        switch (fontName) {
          case "Quicksand":
            style = "'Quicksand', sans-serif";
            break;
          case "Caveat":
            style = "'Caveat', cursive";
            break;
          case "Handlee":
            style = "'Handlee', cursive";
            break;
          case "Tangerine":
            style = "'Tangerine', cursive";
            break;
          case "Palanquin":
            style = "'Palanquin', sans-serif";
            break;
          case "Harmattan":
            style = "'Harmattan', sans-serif";
            break;
          case "Nunito Sans":
            style = "'Nunito Sans', sans-serif";
            break;
        }
        if (style) {
          let writingSpace = document.getElementById("writingSpace");
          writingSpace.style.fontFamily = style;
        }
      },
      fontSizeChanged: function(e) {
        let newFontSize = e.target.value;
        let fontSizeIndicator = document.getElementById("fontSizeIndicator");
        fontSizeIndicator.innerHTML = newFontSize;
        let writingSpace = document.getElementById("writingSpace");
        writingSpace.style.fontSize = newFontSize + "px";

        this.fontSize = newFontSize;
      },
      writingContentChanged: function() {
        let newWritingContent = document.getElementById("writingSpace").value;
        this.$store.commit('updateWritingContentOnSelectedFile', newWritingContent);
      },
      clickFile: function(index) {
        let selectedFileContent = this.$store.getters.getWritingContentFromFile(index);
        if (selectedFileContent) {
          document.getElementById("writingSpace").value = selectedFileContent.content;
        }
        this.$store.commit('updateSelectedFile', index);
      }
      // reCalcWritingBorderWidth: function() {
      //   const borderAnimationWrapper = document.getElementById("borderAnimationWrapper");
      //   let computedHeight = window.getComputedStyle(document.getElementById("writingWrapper")).getPropertyValue('height');
      //   let w = document.getElementById("writingWrapper").clientWidth;
      //   borderAnimationWrapper.style.width = (w - 2) + "px";
      //   borderAnimationWrapper.style.height = (computedHeight - 2) + "px";
      // }
    },
    mounted() {
      const writingSpace = document.getElementById("writingSpace");
      let calcHeight = window.innerHeight - document.getElementById("navWrapper").clientHeight;
      writingSpace.style.height = calcHeight + "px";

      this.fontSize = parseInt(window.getComputedStyle(writingSpace, null).getPropertyValue('font-size'));

      if (!this.writingContent) {
        // will actually only create 1 empty file, but for now "fetch" data
        let tempFakeFiles = [
          {
            fileName: 'Chapter 1',
            content: "blah",
            lastUpdated: Date.now()
          },
          {
            fileName: 'Chapter 2',
            content: "This is Chapter 2",
            lastUpdated: Date.now()
          },
          {
            fileName: 'Chapter 3',
            content: "This is Chapter 3... The end.",
            lastUpdated: Date.now()
          }
        ]

        this.$store.commit('updateAllWritingContent', tempFakeFiles);
      }

      // load current file into writing space
      let contentFromSelectedFile = this.$store.getters.getWritingContentFromFile(this.selectedFile);
      if (contentFromSelectedFile.content) {
        writingSpace.value = contentFromSelectedFile.content;
      }
    }
  }
</script>

<style scoped>
  .Quicksand {
    font-family: 'Quicksand', sans-serif;
  }
  .Caveat {
    font-family: 'Caveat', cursive;
  }
  .Handlee {
    font-family: 'Handlee', cursive;
  }
  .Tangerine {
    font-family: 'Tangerine', cursive;
  }
  .Palanquin {
    font-family: 'Palanquin', sans-serif;
  }
  .Harmattan {
    font-family: 'Harmattan', sans-serif;
  }
  .NunitoSans {
    font-family: 'Nunito Sans', sans-serif;
  }

  h4 {
    font-family: 'Julius Sans One', sans-serif;
    font-size: 24px;
  }

  .WritingRoomWrapper {
    display: flex;
    position: fixed;
    background: linear-gradient(135deg, #222, #2b2b2b);
    justify-content: center;
    align-items: center;
    padding-top: 2vh;
    padding-bottom: 2vh;
    height: 80vh;
    width: 100vw;
    box-sizing: border-box;
  }


  /* BORDER ANIMATION */

  .svg {
    position: absolute;
    top: -2px;
    width: 100vw;
  }
  .svgPath {
    stroke-linecap: round;
    stroke-dasharray: 200, 10000;
    stroke-dashoffset: 200;
    stroke-width: 4;
    stroke: #fff;
    animation: strokeAnimation 6s linear infinite;
  }
  .svgCircle {
    fill: linear-gradient(0deg, #fff, #444);
  }

  @keyframes strokeAnimation {
    0% {
      stroke-dashoffset: 200;
    }
    50% {
      stroke-dashoffset: 2000;
    }
    100% {
      stroke-dashoffset: 2000;
    }
  }

  /* .borderAnimationWrapper {
    width: 100%;
    height: 100%;
    position: fixed;
  }
  .borderAnimationCircleWrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -99;
    border-radius: 4px 4px 0 0;
    overflow: hidden;
  }
  .borderAnimationCircle {
    position: absolute;
    left: -50%;
    top: -50%;
    width: 100%;
    height: 100%;
    z-index: -999;
    background: radial-gradient(rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%);
    border-radius: 50%;
    animation: borderAnimation 8s linear infinite;
  } */
  .borderBlur1 {
    filter: blur(8px);
    mix-blend-mode: screen;
  }
  .borderBlur2 {
    filter: blur(16px);
    mix-blend-mode: screen;
  }
  /* .borderAnimationMask {
    position: absolute;
    left: 1px;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 1px);
    z-index: -99;
    border-radius: 4px 4px 0 0;
    background-color: rgba(0,0,0,0);
  }
  @keyframes borderAnimation {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(0, -100%);
    }
    20% {
      transform: translate(100%, -100%);
    }
    30% {
      transform: translate(100%, 0);
    }
    35% {
      transform: translate(50%, 0);
    }
    95% {
      transform: translate(50%, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  } */

  /* --- */


  .hideFilesWrapper, .hideFormatWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 0px;
  }
  .hideFilesButton, .hideFormatButton {
    position: absolute;
    color: #fff;
    background: none;
    width: 20px;
    height: 100%;
    transform: translateX(10px);
    border: none;
    z-index: 99;
    outline: none;
  }
  .hideFormatButton {
    transform: translateX(-10px);
  }
  button:hover {
    cursor: pointer;
    color: #e8e8e8;
    background-color: rgba(0,0,0,.5);
  }

  .FilesTitle {
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #747474;
  }

  .FileLibrary, .FormatWrapper {
    min-width: 15vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
  }

  .FileTree {
    border-collapse: collapse;
    width: 100%;
  }

  .FileTree td {
    padding: 10px 40px;
    border-bottom: 1px solid #747474;
  }
  .FileTree td:hover {
    background: rgba(255,255,255,.1);
    cursor: pointer;
  }

  .FormatWrapper {
    align-items: stretch;
  }

  .fontSizeIndicator {
    text-align: center;
  }

  .fontSizeSlider {
    margin: 20px 20px;
    -webkit-appearance: none;
    appearance: none;
    background: rgba(255,255,255,.1);
    outline: none;
    height: 8px;
    transition: background 0.5s;
    border-radius: 4px;
  }
  .fontSizeSlider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #919191;
    transition: background 0.5s;
  }
  .fontSizeSlider:hover {
    background: rgba(255,255,255,.25);
  }
  .fontSizeSlider::-webkit-slider-thumb:hover {
    cursor: pointer;
    background: #5bd6a2;
  }

  .fontChoiceButton {
    height: 2.5em;
    margin: 20px 30px;
    border: none;
    border-radius: 5px;
    background: none;
    color: #797979;
    font-size: 18px;
    transition: color 0.5s, background 0.5s;
    outline: none;
  }
  .fontChoiceButton:hover {
    cursor: pointer;
    background: rgba(255,255,255,.1);
  }

  .WritingSpace {
    -webkit-appearance: none;
    appearance: none;
    resize: none;
    width: 100%;
    height: 100%;
    margin: 60px;
    padding: 40px;
    outline: none;
    border: none;
    /* background: linear-gradient(135deg, #222, #2b2b2b); */
    background: none;
    z-index: 0;
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    border-radius: 6px;
    color: rgba(255,255,255,.35);
    transition: color 0.5s, background 0.5s;
  }
  .WritingSpace:hover {
    /* background: rgba(255,255,255,.04); */
    /* animation: writingSpaceFocusFade 2s; */
  }
  .WritingSpace:focus {
    color: #6acca0;
    /* background: rgba(255,255,255,.04); */
  }
  .WritingSpace::placeholder {
    color: rgba(255,255,255,.15);
  }
  .WritingSpace::-webkit-scrollbar {
    background: rgba(255,255,255,.02);
    border-radius: 6px;
    width: 8px;
  }
  .WritingSpace::-webkit-scrollbar:hover {
    background: rgba(255,255,255,.08);
    cursor: pointer;
  }
  .WritingSpace::-webkit-scrollbar-thumb {
    background-color: rgba(255,255,255,.06);
    border-radius: 6px;
  }
  .WritingSpace::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255,255,255,.15);
    cursor: pointer;
  }

  @keyframes writingSpaceFocusFade {
    0% {
      background: rgba(255,255,255,0);
    }
    25% {
      background: rgba(255,255,255,.04);
    }
    100% {
      background: rgba(255,255,255,0);
    }
  }
</style>
