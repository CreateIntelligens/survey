<script setup lang="ts">
import 'survey-core/survey-core.min.css';
import { Model } from 'survey-core';
import "survey-core/i18n/traditional-chinese";
import { SurveyComponent } from "survey-vue3-ui";

const surveyJson = {
  "title": "去你的",
  "description": "喔喔喔喔喔",
  "pages": [
    {
      "name": "page1",
      "title": "一",
      "elements": [
        {
          "type": "boolean",
          "name": "question1",
          "title": "要嗎？",
          "labelTrue": "好",
          "labelFalse": "不要"
        }
      ]
    },
    {
      "name": "page2",
      "title": "二",
      "elements": [
        {
          "type": "tagbox",
          "name": "question3",
          "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
          ]
        },
        {
          "type": "text",
          "name": "question2"
        }
      ]
    }
  ]
}

const surveyComplete = (survey: any) => {
  const userId = "USDSADASDASD"
  survey.setValue("userId", userId);

  console.log("Survey results: " + JSON.stringify(survey.data));
}

const survey = new Model(surveyJson);
survey.locale = "zh-tw";
survey.onComplete.add(surveyComplete);

</script>

<template>
  <SurveyComponent :model="survey" />
</template>
