pipeline{
    agent any
    stages {
        stage("Build and tag image") {
            steps {
                script {
                    docker.build("registry.camdx.gov.kh/camdl/ethstat-server:v1.0.$BUILD_NUMBER")
                }
            }
        }
        stage('Deploy Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.camdx.gov.kh', 'harbor-credential') {
                        sh "docker push registry.camdx.gov.kh/camdl/ethstat-server:v1.0.$BUILD_NUMBER"
                    }
                }
                
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}