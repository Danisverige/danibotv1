const commands = [
  {keywords:["make file","create file"], response:`touch filename.txt`},
  {keywords:["list files","ls"], response:`ls -l\nls -la\nls -lh\nls -lh /var/log`},
  {keywords:["current directory","pwd"], response:`pwd`},
  {keywords:["change directory","cd"], response:`cd /path/to/dir\ncd ..\ncd /var/log\ncd ~/projects`},
  {keywords:["make directory","mkdir","make folder"], response:`mkdir new_folder\nmkdir reports\nmkdir -p /opt/apps/data`},
  {keywords:["copy file","cp"], response:`cp source_file dest_file\ncp notes.txt notes.bak\ncp -r /etc/nginx /backup/nginx`},
  {keywords:["move file","mv"], response:`mv old_name new_name\nmv test.txt docs/\nmv old.cfg new.cfg`},
  {keywords:["remove file","rm"], response:`rm filename\nrm error.log\nrm -rf dist`},
  {keywords:["search in file","grep"], response:`grep 'pattern' filename\ngrep -n 'ERROR' /var/log/syslog\ngrep -ri 'todo' .`},
  {keywords:["change permissions","chmod"], response:`chmod 755 filename\nchmod 644 index.html\nchmod -R 755 /var/www/html`},
  {keywords:["process list","ps","top"], response:`ps aux | head\ntop`},

  {keywords:["install ssh","openssh"], response:`sudo apt update && sudo apt install -y openssh-client openssh-server\nsudo systemctl enable ssh && sudo systemctl start ssh`},
  {keywords:["ssh connect","ssh login"], response:`ssh user@hostname\nssh ubuntu@203.0.113.10\nssh ec2-user@ec2-1-2-3-4.compute.amazonaws.com`},
  {keywords:["generate ssh key","ssh keygen","create ssh key","ssh key"], response:`ssh-keygen -t rsa -b 4096 -m PEM -f ~/.ssh/aws_key\nchmod 600 ~/.ssh/aws_key\ncat ~/.ssh/aws_key.pub`},

  {keywords:["git clone"], response:`git clone https://github.com/user/repo.git\ncd repo\nls -la\ngit branch -a`},
  {keywords:["git status"], response:`git status`},
  {keywords:["git add"], response:`git add file.txt\ngit add -A`},
  {keywords:["git commit"], response:`git commit -m "Describe your change"`},
  {keywords:["git push"], response:`git push origin main\ngit push -u origin $(git branch --show-current)`},
  {keywords:["git pull"], response:`git pull origin main`},
  {keywords:["git branch"], response:`git branch\ngit branch -r\ngit checkout -b feature/x`},
  {keywords:["git merge"], response:`git merge develop`},

  {keywords:["install aws cli","configure aws","aws configure","configure aws cli","access key","secret key"], response:`# Install and configure AWS CLI\ncurl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\n\naws --version\naws configure\n...`},

  {keywords:["list ec2","describe instances"], response:`aws ec2 describe-instances --output table`},
  {keywords:["launch ec2","run instance"], response:`aws ec2 run-instances --image-id ami-...`},
  {keywords:["start ec2"], response:`aws ec2 start-instances --instance-ids i-...`},
  {keywords:["stop ec2"], response:`aws ec2 stop-instances --instance-ids i-...`},
  {keywords:["terminate ec2"], response:`aws ec2 terminate-instances --instance-ids i-...`},
  {keywords:["get ec2 public ip"], response:`aws ec2 describe-instances ...`},

  {keywords:["list buckets"], response:`aws s3 ls`},
  {keywords:["create s3 bucket"], response:`aws s3 mb s3://my-bucket`},
  {keywords:["upload to s3"], response:`aws s3 cp ./file.txt s3://my-bucket/`},
  {keywords:["download from s3"], response:`aws s3 cp s3://my-bucket/file.txt ./`},

  {keywords:["list vpcs"], response:`aws ec2 describe-vpcs --output table`},
  {keywords:["list subnets"], response:`aws ec2 describe-subnets --output table`},
  {keywords:["list security groups"], response:`aws ec2 describe-security-groups --output table`},

  {keywords:["ssh into ec2"], response:`ssh -i ~/.ssh/aws_key ec2-user@ec2-203-0-113-25.compute-1.amazonaws.com`},

  {keywords:["help"], response:`Try: Linux (ls, grep, chmod), SSH (ssh key, connect), Git/GitHub (clone, push, merge), AWS (aws cli, configure aws, launch ec2, list buckets).`}
];

function getReply(query) {
  const q = query.toLowerCase();
  for (const item of commands) {
    for (const kw of item.keywords) {
      if (q.includes(kw.toLowerCase())) return item.response;
    }
  }
  const tokens = q.split(/[^a-z0-9]+/).filter(Boolean);
  for (const item of commands) {
    if (item.keywords.some(kw => tokens.some(t => kw.toLowerCase().includes(t) || t.includes(kw.toLowerCase())))) return item.response;
  }
  return "❌ Sorry, I don't know that yet. Try 'help' for examples.";
}

module.exports = { getReply };
