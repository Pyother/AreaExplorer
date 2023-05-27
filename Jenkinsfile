pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Build Process'
        sh '''rm -rf *
'''
        sh 'git clone https://github.com/Pyother/AreaExplorer.git'
        sh '''cd AreaExplorer/dockerfiles
'''
        sh 'sudo su'
        sh '''apt-get install -y npm
'''
        sh 'apt-get install -y nodejs'
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