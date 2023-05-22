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
        sh '''git clone https://github.com/Pyother/AreaExplorer
'''
        sh 'cd AreaExplorer/frontend'
        sh '''apt-get install -y nodejs
'''
        sh 'apt-get install -y npm'
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