pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        sh 'echo "Checkout"'
      }
    }

    stage('Build') {
      steps {
        echo 'Build Process'
        sh '''rm -rf *
'''
        sh 'git clone https://github.com/InzynieriaOprogramowaniaAGH/MDO2023_INO.git'
        sh 'ls'
      }
    }

    stage('Test') {
      steps {
        sh 'echo "Test"'
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo "Deploy"'
      }
    }

    stage('Publish') {
      steps {
        sh 'echo "Publish"'
      }
    }

  }
}