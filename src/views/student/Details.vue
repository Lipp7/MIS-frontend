<template>
    <v-container>
        <v-row>
            <h1>软件测试</h1>
        </v-row>
        <v-card v-for="(format, i) in formats" :key="i">
            <v-card-title>指标点 {{i}}</v-card-title>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>课程教学目标</v-list-item-title>
                    <v-list-item-subtitle>{{format.goal}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>毕业要求指标点</v-list-item-title>
                    <v-list-item-subtitle>{{format.point}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-group value="true" disabled>
                <template v-slot:activator>
                    <v-list-item-title>评价依据</v-list-item-title>
                </template>
                <v-list-item v-for="(rule, i) in format.rules" :key="i">
                    <v-list-item-title>{{rule.name}}</v-list-item-title>
                    <v-list-item-subtitle>
                        <v-row>
                            <v-col >
                                <v-text-field :label=rule.marks disabled ></v-text-field>
                            </v-col>
                            <v-col>/{{rule.marks}}分</v-col>
                        </v-row>
                    </v-list-item-subtitle>
                </v-list-item>
            </v-list-group>
            <v-divider></v-divider>
        </v-card>
        <div class="text-center">
            <v-btn color="primary" @click="golink(route)">返回</v-btn>
        </div>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        all_student_number: 36,
        done_student_number: 3,
        formats: [
            {
                route: 'alarm1',
                goal:
                    "目标 1. 掌握基软件测试的基本概念、基本理论、常用测试方法与测试技术",
                point:
                    "3-1. 掌握软件设计和产品开发的全周期，掌握基本的设计/开发方法和技术；",
                rules: [
                    {
                        name: "平时表现",
                        marks: 4
                    },
                    {
                        name: "作业",
                        marks: 6
                    },
                    {
                        name: "期末试题：试题一、试题三",
                        marks: 21
                    }
                ]
            },
        ],
        grades: []
    }),
    methods:{
        golink(route){
          this.$router.replace('/home/student/alarm/'+route)
        }
      }
    
};
</script>