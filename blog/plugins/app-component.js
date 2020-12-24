import Vue from 'vue';


//UI
import Message from '@/components/UI/Message'
import Intro from "@/components/UI/Intro.vue";
import PostsList from "@/components/Blog/PostsList.vue";
// controls
import AppButton from '@/components/UI/Controls/Button'
import AppInput from '@/components/UI/Controls/Input'
import AppTextArea from '@/components/UI/Controls/TextArea'
//UI
Vue.component('Message', Message);
Vue.component('Intro', Intro);
Vue.component('PostsList', PostsList);
// controls

Vue.component('AppButton', AppButton);
Vue.component('AppInput', AppInput);
Vue.component('AppTextArea', AppTextArea);

