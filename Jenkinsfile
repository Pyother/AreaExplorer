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
        sh '''echo "Build"
cd frontend
npm run build'''
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