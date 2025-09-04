# Danibot — Your DevOps Sidekick 🤖

**Danibot** is a lightweight, rule-based chatbot designed to assist developers and DevOps engineers by providing quick guidance, example commands, and best practices for Linux, SSH, Git/GitHub, and AWS. Originally built as a single HTML/JS file for easy browser use, it has now evolved into a small modular project with separate files for HTML, CSS, and JavaScript to improve maintainability and scalability. Danibot runs entirely in the browser without any backend, making it fast, secure, and easy to deploy anywhere.

Note: This project is actively under development. Bugs are being fixed and more commands and features will be added soon to improve the experience.

---

## 🎬 Demo

[Try Danibot Live](https://danisverige.github.io/Danibot/danibot.html)  

---

## 🚀 Features

| Feature               | Description                                         |
|-----------------------|-----------------------------------------------------|
| Linux Commands        | Rule-based responses for common Linux commands      |
| SSH Management        | Guidance for generating and using SSH keys          |
| Git/GitHub            | Common Git commands & workflow examples              |
| AWS Commands          | S3, EC2, and CLI references                          |
| Browser-based         | No installation needed, runs in any modern browser  |

---

## 💬 Example Interaction

**User:** `configure aws cli`  
**Danibot:**  
```text
# Install and configure AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# (to confirm)
aws --version

# (AWS) IAM Access Key Creation:
# Identity and Access Management (IAM) -> Users -> USERNAME
# Create access key -> CLI -> Copy keys

# Configure keys in Ubuntu
aws configure
AWS Access Key ID: ENTERAWSACCESSKEYHERE
AWS Secret Access Key: enterawssecretkeyhere
Default region: eu-north-1
Default output format: json

# Verify installation:
aws iam list-users

If you see your AWS user name here. Congratulations!!
AWS CLI has been successfully installed! 🎉
