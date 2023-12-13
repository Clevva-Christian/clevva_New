<template>
  <main>
    <section>
      <div class="card">
        <Splitter class="border-none drop-shadow-xl rounded-md"> 
          <SplitterPanel class="shadow-xl bg-[--surface-200]" :size="20" :minSize="15">
            <Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-30rem border-none"></Tree>
          </SplitterPanel>
          <SplitterPanel :size="80">
            <div class="inner-card">
              <div class="flex justify-end">
                <Button :icon="!darkmode ? 'pi pi-sun' : 'pi pi-moon'" class="bg-white shadow-md text-[--text-color] border-none mb-5" rounded iconPos="center" aria-label="darkmode" @click="darkModeSwitch"/>
              </div>
              <div class="flex justify-between w-full mb-10 content-center">
                <h1 class="font-bold text-3xl">VA NAME HERE</h1>
                <Button label="ACL" icon="pi pi-code" iconPos="left" @click="openTerm ? openTerm = false : openTerm = true"/>
              </div>
              <Divider class="mb-10"/>
              <div :class="openTerm === true ? 'max-h-96 overflow-hidden' : 'max-h-0 overflow-hidden pointer-events-none'">
                <!-- Terminal -->
                <Terminal
                class="shadow-xl rounded-md mb-10"
                welcomeMessage="Welcome to CLEVVA ACL"
                prompt="CLEVVA $"
                aria-label="CLEVVA Terminal Service"
                :pt="{
                  root: 'bg-gray-900 text-white border-round',
                  prompt: 'text-green-300 mr-2',
                  command: 'text-primary-300',
                  response: 'text-primary-300'
                }"
                />
                
                <Divider class="mb-10"/>
              </div>
              <div class="p-5 rounded-md bg-gray-100 shadow-md">
                <!-- Va Container -->
                <h2 class="text-2xl mb-5 ">VA content here</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam risus, tristique nec dapibus sed, convallis eget elit. Phasellus ut mauris quis lectus fringilla ultricies vel in ipsum. Aenean finibus scelerisque augue, sed dapibus ligula lacinia ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ut hendrerit magna. Aliquam sed finibus mi, id eleifend nunc. Etiam sed magna at metus mattis hendrerit sed eu nunc. In venenatis nec neque at gravida. Suspendisse id facilisis lectus, eget consectetur lacus. Etiam aliquet, augue sit amet lacinia facilisis, felis justo ornare orci, sit amet eleifend tellus odio ut dui. Nam mattis libero ac felis auctor bibendum. Aenean vestibulum volutpat tempor. Cras posuere condimentum magna, et gravida lectus bibendum ac.
                  <br />
                  <br />
                  Suspendisse potenti. Curabitur bibendum vitae velit et venenatis. Mauris vitae justo eu sem suscipit iaculis. Etiam ac enim ut urna posuere feugiat sed quis est. Quisque ullamcorper venenatis lectus, et facilisis magna aliquet quis. Nulla facilisi. In mattis dui est, et volutpat risus rhoncus eu. Etiam elit nulla, ultrices at est et, viverra consequat tortor. In id enim posuere, sagittis urna a, maximus lectus. Curabitur consectetur porttitor justo a porta. Vestibulum sed libero at arcu iaculis semper. Morbi porttitor ex sit amet consectetur bibendum. In molestie leo eget eros posuere ultricies. In hac habitasse platea dictumst. Etiam suscipit, risus nec pulvinar commodo, neque augue bibendum purus, at laoreet nibh est non erat. Curabitur gravida ultricies laoreet. 
                </p>
              </div>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
    </section>
  </main>
</template>


<script>
import { NodeService } from '@/service/NodeService';
import { usePrimeVue } from 'primevue/config';
export default {
    data() {
        return {
            nodes: null,
            openTerm: false,
            darkmode: false,
            PrimeVue: usePrimeVue(),
        };
    },
    methods: {
      darkModeSwitch() {

        this.darkmode = this.darkmode ? this.darkmode = false : this.darkmode = true;

        // if (!this.darkmode) {
        //   this.PrimeVue.changeTheme('saga-green', 'vela-green', 'themes', () => {
        //     console.log('theme 1')
        //   });

        //   this.darkmode = true
        // } else {
        //   this.PrimeVue.changeTheme('vela-green', 'saga-green', 'themes', () => {
        //     console.log('theme 2')
        //   });
          
        //   this.darkmode = false
        // }
      }
    },
    mounted() {
      NodeService.getTreeNodes().then((data) => (this.nodes = data));
    } 
}
</script>