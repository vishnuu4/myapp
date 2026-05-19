pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "yourdockerhubusername/myapp"
    }

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/your-repo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop myapp || true
                docker rm myapp || true
                docker run -d -p 80:3000 --name myapp $DOCKER_IMAGE
                '''
            }
        }
    }
}
