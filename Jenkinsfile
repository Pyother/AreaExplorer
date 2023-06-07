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
        dir(path: 'dockerfiles') {
          sh 'docker --version'
          sh 'docker build -t buildimage -f Dockerfile.build .'
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