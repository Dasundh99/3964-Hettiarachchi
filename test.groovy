pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_VERSION = '1.29.0'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from SCM repository
                git credentialsId: '99999', url: 'https://github.com/Dasundh99/3964-Hettiarachchi.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                // Install Docker Compose
                sh "sudo curl -L https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose"
                sh "sudo chmod +x /usr/local/bin/docker-compose"

                // Build Docker images
                sh 'docker-compose -f docker-compose.yml build'
            }
        }

        stage('Run Docker Containers') {
            steps {
                // Run Docker containers
                sh 'docker-compose -f docker-compose.yml up -d'
            }
        }

        
    }

    post {
        always {
            // Cleanup: Stop and remove Docker containers
            sh 'docker-compose -f docker-compose.yml down'
        }
    }
}
