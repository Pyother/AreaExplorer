pipeline {
  agent any
  stages {
    stage('Configure') {
      steps {
        sh 'echo "CONFIGURATION"'
        sh 'rm *.tgz'
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
        sh 'npm -y init'
        sh 'npm pack'
        sh 'ls'
      }
    }

    stage('Publish') {
      steps {
        sh 'echo "PUBLISH"'
        sh '''def packageFile = sh(returnStdout: true, script: \'ls | grep *.tgz\').trim()
archiveArtifacts artifacts: packageFile, fingerprint: true
'''
      }
    }

  }
}