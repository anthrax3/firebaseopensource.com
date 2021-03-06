/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Vue from "vue";
import { Component, Inject, Model, Prop, Watch } from "vue-property-decorator";

@Component
export default class HeaderBar extends Vue {
  name = "header-bar";
  headers = [{}, { spacer: true }];

  @Prop() spacer: boolean;

  @Prop() enable_subheader: boolean;

  @Prop() subheader_title: string;

  @Prop() subheader_tabs: string[];

  subheader_tab_selection = "";

  @Watch("subheader_tabs", { immediate: true })
  onSubheaderTabsChange() {
    if (this.subheader_tabs && this.subheader_tabs.length) {
      this.subheader_tab_selection = this.subheader_tabs[0];
    }
  }

  @Watch("subheader_tab_selection")
  onSubheaderTabSelectionChange(subheader_tab_selection: string) {
    this.$emit("subheader_tab_selection:change", subheader_tab_selection);
  }

  setSubheaderTabSelection(tab: string) {
    Vue.set(this, "subheader_tab_selection", tab);
  }
}

require("./template.html")(HeaderBar);
