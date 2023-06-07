pipeline {
  agent any
  stages {
    stage('Configure') {
      steps {
        sh 'echo "CONFIGURATION"'
      }
    }

    stage('Build') {
      steps {
        sh 'echo "BUILD"'
        sh 'ls'
        dir(path: 'frontend') {
          sh 'npm install -f react'
          sh 'npm install -f react-scripts'
          sh 'npm run build'
        }

      }
    }

    stage('Test') {
      steps {
        dir(path: 'frontend') {
          sh 'npm run test'
        }

      }
    }

    stage('Deploy') {
      steps {
        sh 'echo "DEPLOY"'
      }
    }

    stage('Publish') {
      steps {
        sh 'echo "PUBLISH"'
      }
    }

  }
}