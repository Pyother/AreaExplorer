pipeline {
  agent any
  stages {
    stage('Configure') {
      steps {
        sh 'echo "CONFIGURATION"'
        sh 'ls'
      }
    }

    stage('Build') {
      steps {
        sh 'echo "BUILD"'
        sh 'ls'
        sh 'npm install -f react'
        sh 'npm install -f react-scripts'
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
        sh 'echo "TEST"'
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo "DEPLOY"'
        sh 'npm pack'
      }
    }

    stage('Publish') {
      steps {
        sh 'echo "PUBLISH"'
      }
    }

  }
}