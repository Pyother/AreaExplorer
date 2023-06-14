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
        sh 'npm install -f react-scripts'
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'echo "TEST"'
        sh 'npm run test'
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo "DEPLOY"'
        sh './package_update.sh'
        sh 'npm pack'
        sh 'ls'
      }
    }

    stage('Publish') {
      steps {
        sh 'echo "PUBLISH"'
        sh '''./package_update.sh
'''
      }
    }

  }
}