pipeline{
    agent any
    stages {
        // stage("Build and tag image") {
        //     steps {
        //     sh "echo $BUILD_NUMBER"
        //         script {
        //             docker.build("registry.camdx.gov.kh/camdl/ethstat-server:v1.0.$BUILD_NUMBER")
        //         }
        //     }
        // }
        stage('Deploy Image') {
            steps {
                docker.withRegistry('https://registry.camdx.gov.kh', 'harbor-credential') {
                    // // the code here can access $pass and $user
                    // sh "docker login registry.camdx.gov.kh -u $user -p $pass"
                    sh "docker push registry.camdx.gov.kh/camdl/ethstat-server:v1.0.1"
                }
            }
        }
    }

    post {
        always {
            sh 'docker logout registry.camdx.gov.kh'
            cleanWs()
        }
    }
}