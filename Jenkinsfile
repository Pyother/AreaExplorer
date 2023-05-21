pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'apt-get install -y git'
      }
    }

    stage('Test') {
      steps {
        echo 'test'
      }
    }

    stage('Deploy') {
      steps {
        echo 'deploy'
      }
    }

    stage('Publish') {
      steps {
        echo 'publish'
      }
    }

  }
}