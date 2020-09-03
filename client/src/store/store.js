import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentUser: null,
    selectedFile: 0,
    writingContent: null
  },
  getters: {
    getWritingContentFromFile: (state) => (fileIndex) => {
      return state.writingContent[fileIndex];
    }
  },
  mutations: {
    updateCurrentUser: (state, user) => {
      state.currentUser = user;
    },
    updateSelectedFile: (state, fileIndex) => {
      state.selectedFile = fileIndex;
    },
    updateAllWritingContent: (state, content) => {
      state.writingContent = content;
    },
    addFileToWritingContent: (state, newFileContent) => {
      if (state.writingContent.length) {
        state.writingContent.push(newFileContent);
      }
    },
    updateWritingContentOnSelectedFile: (state, content) => {
      state.writingContent[state.selectedFile].content = content;
    }
  }
})
