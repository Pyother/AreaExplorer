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
          sh 'npm run build'
        }

      }
    }

    stage('Test') {
      steps {
        sh 'echo "TEST"'
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