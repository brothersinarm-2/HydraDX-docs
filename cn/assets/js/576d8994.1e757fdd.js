(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(93)),o=n(94),c={id:"node_monitoring",title:"\u8282\u70b9\u76d1\u63a7"},s={unversionedId:"node_monitoring",id:"node_monitoring",isDocsHomePage:!1,title:"\u8282\u70b9\u76d1\u63a7",description:"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5f15\u5bfc\u60a8\u5b8c\u6210\u9a8c\u8bc1\u8282\u70b9\u7684\u672c\u5730\u76d1\u63a7\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/node_monitoring.md",slug:"/node_monitoring",permalink:"/cn/node_monitoring",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/node_monitoring.md",version:"current",sidebar:"sidebar",previous:{title:"\u57fa\u672c\u6027\u80fd\u6d4b\u8bd5",permalink:"/cn/performance_benchmark"},next:{title:"\u5efa\u7acb\u5f00\u53d1\u94fe",permalink:"/cn/build_dev_chain"}},i=[{value:"\u524d\u63d0\u6761\u4ef6",id:"prerequisites",children:[]},{value:"Prometheus \u8bbe\u7f6e",id:"prometheus-setup",children:[{value:"\u7528\u6237\u548c\u76ee\u5f55",id:"user-and-directories",children:[]},{value:"\u5b89\u88c5 Prometheus",id:"install-prometheus",children:[]},{value:"\u542f\u52a8 Prometheus",id:"starting-prometheus",children:[]}]},{value:"Node Exporter\uff08\u8282\u70b9\u5bfc\u51fa\u5668\uff09",id:"node-exporter",children:[{value:"\u5b89\u88c5 Node Exporter",id:"install-node-exporter",children:[]},{value:"\u521b\u5efa\u7cfb\u7edf\u670d\u52a1",id:"create-a-systemd-service",children:[]},{value:"\u4e3a Node Exporter \u6dfb\u52a0\u6293\u53d6\u4f5c\u4e1a",id:"add-scrape-job-for-node-exporter",children:[]}]},{value:"Grafana \u8bbe\u7f6e",id:"grafana-setup",children:[{value:"\u5b89\u88c5 Grafana",id:"install-grafana",children:[]},{value:"\u8bbf\u95ee Web \u754c\u9762",id:"accessing-the-web-interface",children:[]},{value:"\u914d\u7f6e\u6570\u636e\u6e90",id:"configuring-the-datasource",children:[]},{value:"\u5bfc\u5165\u4eea\u8868\u76d8",id:"importing-the-dashboard",children:[]}]}],p={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5f15\u5bfc\u60a8\u5b8c\u6210\u9a8c\u8bc1\u8282\u70b9\u7684\u672c\u5730\u76d1\u63a7\u3002"),Object(l.b)("h2",{id:"prerequisites"},"\u524d\u63d0\u6761\u4ef6"),Object(l.b)("p",null,"\u60a8\u5fc5\u987b\u542f\u52a8\u5e76\u8fd0\u884c ",Object(l.b)("a",{parentName:"p",href:"/node_setup"},"\u9a8c\u8bc1\u8282\u70b9")," \u3002"),Object(l.b)("p",null,"\u672c\u6307\u5357\u5df2\u5728 Ubuntu 20.04 LTS \u7cfb\u7edf\uff0c\u8fdb\u884c\u4e86\u6d4b\u8bd5\u3002  "),Object(l.b)("h2",{id:"prometheus-setup"},"Prometheus \u8bbe\u7f6e"),Object(l.b)("p",null,"\u5728\u7b2c\u4e00\u6b65\u4e2d\uff0c\u6211\u4eec\u5c06\u8bbe\u7f6e Prometheus \u670d\u52a1\u5668\u3002"),Object(l.b)("h3",{id:"user-and-directories"},"\u7528\u6237\u548c\u76ee\u5f55"),Object(l.b)("p",null,"\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u4ec5\u7528\u4e8e\u76d1\u89c6\u7684\u7528\u6237\uff0c\u8be5\u7528\u6237\u6ca1\u6709\u7ba1\u7406\u5458\u6743\u9650\uff0c\u65e0\u6cd5\u7528\u4e8e\u767b\u5f55\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus\n")),Object(l.b)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u4e3a\u53ef\u6267\u884c\u6587\u4ef6\u548c\u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u76ee\u5f55\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo mkdir /etc/prometheus\n$ sudo mkdir /var/lib/prometheus\n")),Object(l.b)("p",null,"\u66f4\u6539\u76ee\u5f55\u7684\u6240\u6709\u6743\uff0c\u4ee5\u5c06\u5176\u9650\u5236\u4e3a\u6211\u4eec\u7684\u65b0\u76d1\u89c6\u7528\u6237\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus\n$ sudo chown -R prometheus:prometheus /var/lib/prometheus\n")),Object(l.b)("h3",{id:"install-prometheus"},"\u5b89\u88c5 Prometheus"),Object(l.b)("p",null,"\u5728 ",Object(l.b)("a",{parentName:"p",href:"https://github.com/prometheus/prometheus/releases/"},"GitHub\u53d1\u5e03\u9875\u9762")," \u4e0a\u68c0\u67e5 Prometheus \u7684\u6700\u65b0\u7248\u672c\u3002\n\u5728\u64b0\u5199\u672c\u6587\u65f6\uff0c\u7248\u672c\u662f v2.25.2\u3002\n\u5728\u4ee5\u4e0b\u547d\u4ee4\u4e2d\u63d2\u5165\u6700\u65b0\u53d1\u884c\u7684\u7248\u672c\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# download prometheus\n$ wget https://github.com/prometheus/prometheus/releases/download/v2.25.2/prometheus-2.25.2.linux-amd64.tar.gz\n\n# unpack the binaries\n$ tar xfz prometheus-*.tar.gz\n\n# enter the unpacked directory\n$ cd prometheus-2.25.2.linux-amd64\n")),Object(l.b)("p",null,"\u73b0\u5728\uff0c\u5c06\u7f16\u8bd1\u6587\u4ef6\u590d\u5236\u5230\u672c\u5730\u6587\u4ef6\u5939\u4e2d\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp ./prometheus /usr/local/bin/\n$ sudo cp ./promtool /usr/local/bin/\n")),Object(l.b)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u9700\u8981\u5c06\u8fd9\u4e9b\u7f16\u8bd1\u6587\u4ef6\u5206\u914d\u7ed9\u6211\u4eec\u65b0\u521b\u5efa\u7684\u7528\u6237\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /usr/local/bin/prometheus\n$ sudo chown prometheus:prometheus /usr/local/bin/promtool\n")),Object(l.b)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u590d\u5236 Web \u754c\u9762\u548c\u914d\u7f6e\u9884\u8bbe\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp -r ./consoles /etc/prometheus\n$ sudo cp -r ./console_libraries /etc/prometheus\n")),Object(l.b)("p",null,"\u60a8\u53ef\u80fd\u5df2\u7ecf\u731c\u5230\u4e86\uff0c\u6211\u4eec\u4e5f\u8981\u66f4\u6539\u8fd9\u4e9b\u76ee\u5f55\u7684\u6240\u6709\u6743\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus/consoles\n$ sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries\n")),Object(l.b)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5df2\u4ece\u4e0b\u8f7d\u7684\u8f6f\u4ef6\u5305\u4e2d\u83b7\u53d6\u4e86\u6240\u9700\u7684\u4e00\u5207\uff0c\u56e0\u6b64\u6211\u4eec\u5c06\u9000\u540e\u4e00\u6b65\u5e76\u8fdb\u884c\u4e00\u4e9b\u6e05\u7406\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ cd .. && rm -rf prometheus*\n")),Object(l.b)("p",null,"\u8ba9\u6211\u4eec\u4f7f\u7528\u60a8\u9009\u62e9\u7684\u7f16\u8f91\u5668\uff08nano / vim / pico\uff09\u4e3a Prometheus \u521b\u5efa\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},"YAML")," \u914d\u7f6e\u6587\u4ef6\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),Object(l.b)("p",null,"\u6211\u4eec\u7684\u914d\u7f6e\u5206\u4e3a\u4e09\u4e2a\u90e8\u5206\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"global"),": \u8bbe\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"scrape_interval")," \u9ed8\u8ba4\u503c\u53ca\u5e26\u6709 ",Object(l.b)("inlineCode",{parentName:"li"},"evaluation_interval")," \u7684\u89c4\u5219\u6267\u884c\u95f4\u9694 "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"rule_files"),": \u6307\u5b9a Prometheus \u670d\u52a1\u5668\u5e94\u52a0\u8f7d\u7684\u89c4\u5219\u6587\u4ef6"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"scrape_configs"),": \u5728\u8fd9\u91cc\u8bbe\u7f6e\u76d1\u89c6\u8d44\u6e90")),Object(l.b)("p",null,"\u6211\u4eec\u5c06\u5176\u8bbe\u7f6e\u5f97\u975e\u5e38\u7b80\u6d01\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'global:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n\nrule_files:\n  # - "weHaveNo.rules"\n\nscrape_configs:\n  - job_name: "prometheus"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9090"]\n  - job_name: "substrate_node"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9615"]\n')),Object(l.b)("p",null,"\u7b2c\u4e00\u4e2a\u6293\u53d6\u4f5c\u4e1a\u5bfc\u51fa Prometheus \u672c\u8eab\u7684\u6570\u636e\uff0c\u7b2c\u4e8c\u4e2a\u6293\u53d6\u4f5c\u4e1a\u5bfc\u51fa HydraDX \u8282\u70b9\u5ea6\u91cf\u3002 \u6211\u4eec\u8c03\u6574\u4e86\u4e24\u4e2a\u4f5c\u4e1a\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"scrape_interval")," \u4ee5\u83b7\u5f97\u66f4\u8be6\u7ec6\u7684\u7edf\u8ba1\u4fe1\u606f\u3002 \u8fd9\u5c06\u8986\u76d6\u5168\u5c40\u503c\u3002 ",Object(l.b)("inlineCode",{parentName:"p"},"static_configs")," \u4e2d\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"target")," \u8bbe\u7f6e\u4e86\u5bfc\u51fa\u5668\u7684\u8fd0\u884c\u4f4d\u7f6e\uff0c\u6211\u4eec\u5728\u6b64\u5904\u4f7f\u7528\u9ed8\u8ba4\u7aef\u53e3\u3002"),Object(l.b)("p",null,"\u4fdd\u5b58\u914d\u7f6e\u540e\uff0c\u6211\u4eec\u5c06\u518d\u6b21\u66f4\u6539\u6240\u6709\u6743\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml\n")),Object(l.b)("h3",{id:"starting-prometheus"},"\u542f\u52a8 Prometheus"),Object(l.b)("p",null,"\u4e3a\u4e86\u4f7f Prometheus \u81ea\u52a8\u542f\u52a8\u5e76\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"systemd")," \u3002\n\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u914d\u7f6e\uff08\u540c\u6837\u4f7f\u7528\u60a8\u9009\u62e9\u7684\u7f16\u8f91\u5668\uff09\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/prometheus.service\n")),Object(l.b)("p",null,"\u7c98\u8d34\u4ee5\u4e0b\u914d\u7f6e\u5e76\u4fdd\u5b58\u6587\u4ef6\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"[Unit]\n  Description=Prometheus Monitoring\n  Wants=network-online.target\n  After=network-online.target\n\n[Service]\n  User=prometheus\n  Group=prometheus\n  Type=simple\n  ExecStart=/usr/local/bin/prometheus \\\n  --config.file /etc/prometheus/prometheus.yml \\\n  --storage.tsdb.path /var/lib/prometheus/ \\\n  --web.console.templates=/etc/prometheus/consoles \\\n  --web.console.libraries=/etc/prometheus/console_libraries\n  ExecReload=/bin/kill -HUP $MAINPID\n\n[Install]\n  WantedBy=multi-user.target\n")),Object(l.b)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u6267\u884c\u4ee5\u4e0b\u4e09\u4e2a\u6b65\u9aa4\uff1a\n",Object(l.b)("inlineCode",{parentName:"p"},"systemctl deamon-reload")," \u91cd\u65b0\u52a0\u8f7d\u5e76\u66f4\u65b0\n",Object(l.b)("inlineCode",{parentName:"p"},"systemctl enable")," \u7cfb\u7edf\u51c6\u5907\n",Object(l.b)("inlineCode",{parentName:"p"},"systemctl start")," \u7cfb\u7edf\u542f\u52a8"),Object(l.b)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5b8c\u6210\u4ee5\u4e0a\u6b65\u9aa4\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable prometheus && systemctl start prometheus\n")),Object(l.b)("p",null,"\u73b0\u5728\uff0c\u60a8\u5e94\u8be5\u53ef\u4ee5\u5728 http\uff1a// localhost\uff1a9090 / \u4e0a\u8bbf\u95ee Prometheus \u7684 Web \u754c\u9762\u3002"),Object(l.b)("h2",{id:"node-exporter"},"Node Exporter\uff08\u8282\u70b9\u5bfc\u51fa\u5668\uff09"),Object(l.b)("p",null,"\u6211\u4eec\u5c06\u5b89\u88c5 Node Exporter\uff08\u8282\u70b9\u5bfc\u51fa\u5668\uff09\uff0c\u6765\u6293\u53d6\u5c06\u5728\u4eea\u8868\u76d8\u4e2d\u4f7f\u7528\u7684\u670d\u52a1\u5668\u6307\u6807\u3002\n\u8bf7\u5728 ",Object(l.b)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter/releases/"},"\u6b64\u5904")," \u68c0\u67e5\u6700\u65b0\u7248\u672c\u7684\u7248\u672c\u53f7\u5e76\u66f4\u65b0\u547d\u4ee4\u3002\n\u5728\u64b0\u5199\u672c\u6587\u65f6\uff0c\u6700\u65b0\u7248\u672c\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"1.1.2")," \u3002"),Object(l.b)("h3",{id:"install-node-exporter"},"\u5b89\u88c5 Node Exporter"),Object(l.b)("p",null,"\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ wget https://github.com/prometheus/node_exporter/releases/download/v1.1.2/node_exporter-1.1.2.linux-amd64.tar.gz\n")),Object(l.b)("p",null,"\u89e3\u538b\u7f29\u521a\u521a\u4e0b\u8f7d\u7684\u8f6f\u4ef6\u5305\u3002\u8fd9\u5c06\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"node_exporter-1.1.2.linux-amd64")," \u7684\u6587\u4ef6\u5939\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ tar xvf node_exporter-1.1.2.linux-amd64.tar.gz\n")),Object(l.b)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u7f16\u8bd1\u6587\u4ef6\u590d\u5236\u5230\u672c\u5730\u5e94\u7528\u7a0b\u5e8f\u76ee\u5f55\u4e2d\uff0c\u5e76\u5c06\u5176\u5206\u914d\u7ed9\u6211\u4eec\u7684\u76d1\u89c6\u7528\u6237\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# copy binary\n$ cp node_exporter-1.1.2.linux-amd64/node_exporter /usr/local/bin\n\n# set ownership\n$ sudo chown prometheus:prometheus /usr/local/bin/node_exporter\n")),Object(l.b)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u6e05\u7406\uff0c\u5e76\u5220\u9664\u4e0b\u8f7d\u5e76\u89e3\u538b\u7f29\u7684\u8f6f\u4ef6\u5305\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ rm -rf node_exporter*\n")),Object(l.b)("h3",{id:"create-a-systemd-service"},"\u521b\u5efa\u7cfb\u7edf\u670d\u52a1"),Object(l.b)("p",null,"\u4e0e prometheus \u76f8\u4f3c\uff0c\u6211\u4eec\u4e5f\u5e0c\u671b Node Exporter \u4e5f\u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\u3002\n\u4f7f\u7528\u60a8\u9009\u62e9\u7684\u7f16\u8f91\u5668\u521b\u5efa\u7cfb\u7edf\u670d\u52a1\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/node_exporter.service\n")),Object(l.b)("p",null,"\u5e76\u5c06\u4ee5\u4e0b\u914d\u7f6e\u7c98\u8d34\u5176\u4e2d\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"[Unit]\nDescription=Node Exporter\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/node_exporter\n\n[Install]\nWantedBy=multi-user.target\n")),Object(l.b)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5c06\u5355\u7ebf\u6fc0\u6d3b\u5e76\u542f\u52a8\u8be5\u670d\u52a1\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable node_exporter && systemctl start node_exporter\n")),Object(l.b)("h3",{id:"add-scrape-job-for-node-exporter"},"\u4e3a Node Exporter \u6dfb\u52a0\u6293\u53d6\u4f5c\u4e1a"),Object(l.b)("p",null,"Node Exporter \u73b0\u5728\u5df2\u542f\u52a8\u5e76\u6b63\u5728\u8fd0\u884c\uff0c\u4f46\u662f\u6211\u4eec\u9700\u8981\u6388\u4e88 Prometheus \u6743\u9650\u3002\n\u6211\u4eec\u5c06\u4f7f\u7528\u6240\u9009\u7684\u7f16\u8f91\u5668\u518d\u6b21\u6253\u5f00\u914d\u7f6e\u6587\u4ef6\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),Object(l.b)("p",null,"\u5e76\u4e14\u5728\u6587\u4ef6\u7684\u6700\u5e95\u90e8\uff0c\u6211\u4eec\u5c06\u8ffd\u52a0\u4e00\u4e2a scrape config\u3002\n\u7c98\u8d34\u4ee5\u4e0b\u5185\u5bb9\u5e76\u4fdd\u5b58\u6587\u4ef6\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"  - job_name: 'node_exporter'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9100']\n")),Object(l.b)("p",null,"\u5e94\u7528\u66f4\u6539\u914d\u7f6e\uff0c\u9700\u8981\u91cd\u65b0\u542f\u52a8 Prometheus \u670d\u52a1\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl restart prometheus.service \n")),Object(l.b)("p",null,"\u73b0\u5728\uff0c\u60a8\u7684\u670d\u52a1\u5668\u6307\u6807\u5df2\u88ab\u6293\u53d6\uff0c\u53ef\u4ee5\u5728 Prometheus Web \u754c\u9762\u4e2d\u627e\u5230\u3002\n\u6211\u4eec\u7a0d\u540e\u5c06\u9700\u8981\u5b83\u4eec\u7528\u4e8e\u4eea\u8868\u76d8\u3002"),Object(l.b)("h2",{id:"grafana-setup"},"Grafana \u8bbe\u7f6e"),Object(l.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 Web \u754c\u9762\u4e2d\u67e5\u770b\u6307\u6807\uff0c\u4f46\u8fd9\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u7684\u76d1\u89c6\u65b9\u5f0f\u3002\n\u6211\u4eec\u5e0c\u671b\u5b83\u597d\u770b\u53c8\u7b80\u6d01\uff0c Grafana \u80fd\u5e2e\u6211\u4eec\u505a\u5230\u8fd9\u4e9b\u3002"),Object(l.b)("h3",{id:"install-grafana"},"\u5b89\u88c5 Grafana"),Object(l.b)("p",null,"\u8bf7\u901a\u8fc7 ",Object(l.b)("a",{parentName:"p",href:"https://grafana.com/grafana/download?platform=linux"},"\u6b64\u94fe\u63a5")," \u68c0\u67e5\u6700\u65b0\u7684 Grafana \u7248\u672c\u3002\n\u60a8\u53ef\u4ee5\u5728\u4ee5\u4e0b\u547d\u4ee4\u4e2d\u66f4\u6539\u7248\u672c\u53f7\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4ece\u94fe\u63a5\u590d\u5236\u5b89\u88c5\u547d\u4ee4\u3002\n\u5728\u64b0\u5199\u672c\u6587\u65f6\uff0c\u6700\u65b0\u7248\u672c\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"7.5.1")," \u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo apt-get install -y adduser libfontconfig1\n$ wget https://dl.grafana.com/oss/release/grafana_7.5.1_amd64.deb\n$ sudo dpkg -i grafana_7.5.1_amd64.deb\n")),Object(l.b)("p",null,"\u8be5\u8f6f\u4ef6\u5305\u5e26\u6709\u5185\u7f6e\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"systemd"),"-service \uff0c\u6211\u4eec\u5c06\u50cf Prometheus \u670d\u52a1\u4e00\u6837\u914d\u7f6e\u548c\u542f\u52a8\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && sudo systemctl enable grafana-server && sudo systemctl start grafana-server\n")),Object(l.b)("h3",{id:"accessing-the-web-interface"},"\u8bbf\u95ee Web \u754c\u9762"),Object(l.b)("p",null,"\u6211\u4eec\u5c06\u80fd\u591f\u5728 http://localhost:3000/ \u4e0a\u6253\u5f00 Grafana Web \u754c\u9762\u3002\n\u9ed8\u8ba4\u767b\u5f55 Grafana \u4e3a\uff1a",Object(l.b)("br",{parentName:"p"}),"\n","User: ",Object(l.b)("inlineCode",{parentName:"p"},"admin"),Object(l.b)("br",{parentName:"p"}),"\n","Password: ",Object(l.b)("inlineCode",{parentName:"p"},"admin"),"  "),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)("img",{src:Object(o.a)("/node-monitoring/grafana-home.png")})),Object(l.b)("h3",{id:"configuring-the-datasource"},"\u914d\u7f6e\u6570\u636e\u6e90"),Object(l.b)("p",null,"\u8bf7\u70b9\u51fb\u83dc\u5355\u4e2d\u7684\u8bbe\u7f6e\uff08\u9f7f\u8f6e\u6309\u94ae\uff09\uff0c\u7136\u540e\u9009\u62e9\u6570\u636e\u6e90\u3002",Object(l.b)("br",{parentName:"p"}),"\n",'\u5728\u4e0b\u4e00\u4e2a\u7a97\u53e3\u4e2d\uff0c\u5355\u51fb "Add Datasource" \uff0c\u7136\u540e\u9009\u62e9 "Prometheus" \u3002  '),Object(l.b)("p",null,"\u5728\u4e0b\u8868\u4e2d\uff0c\u60a8\u65e0\u9700\u66f4\u6539URL\u3002\n\u8bbe\u7f6e ",Object(l.b)("inlineCode",{parentName:"p"},"http://localhost:9090/"),"\uff0c\u7136\u540e\u5355\u51fb ",Object(l.b)("inlineCode",{parentName:"p"},"Save and Test"),"\u3002"),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)("img",{src:Object(o.a)("/node-monitoring/grafana-datasource.png")})),Object(l.b)("h3",{id:"importing-the-dashboard"},"\u5bfc\u5165\u4eea\u8868\u76d8"),Object(l.b)("p",null,"\u8bf7\u5355\u51fb\u4e3b\u5bfc\u822a\u4e2d\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"Plus")," \u6309\u94ae\uff0c\u7136\u540e\u9009\u62e9 ",Object(l.b)("inlineCode",{parentName:"p"},"import"),"\uff1a "),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)("img",{src:Object(o.a)("/node-monitoring/grafana-import.png")})),Object(l.b)("p",null,"\u6211\u4eec\u5c06\u4f7f\u7528 ",Object(l.b)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/14158"},"HydraDX Dashboard")," \u8fdb\u884c\u52a0\u8f7d\uff0c\u60a8\u53ea\u9700\u8f93\u5165id ",Object(l.b)("inlineCode",{parentName:"p"},"14158")," \u5e76\u70b9\u51fb ",Object(l.b)("inlineCode",{parentName:"p"},"Load")," \u6309\u94ae\u5373\u53ef\u52a0\u8f7d\u5b83\uff1a"),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)("img",{src:Object(o.a)("/node-monitoring/grafana-import-options.png")})),Object(l.b)("p",null,"\u60a8\u5728\u8fd9\u91cc\u4e0d\u9700\u8981\u592a\u591a\u914d\u7f6e\uff0c\u53ea\u9700\u786e\u4fdd\u5c06 Prometheus \u7528\u4f5c\u6570\u636e\u6e90\u5373\u53ef\u3002\n\u60a8\u73b0\u5728\u53ef\u4ee5\u5b8c\u6210\u5bfc\u5165\uff1a  "),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)("img",{src:Object(o.a)("/node-monitoring/grafana-dashboard.png")})),Object(l.b)("p",null,"\u73b0\u5728\uff0c\u60a8\u5e94\u8be5\u7acb\u5373\u770b\u5230\u4eea\u8868\u76d8\u3002",Object(l.b)("br",{parentName:"p"}),"\n","\u5982\u679c\u67d0\u4e9b\u9762\u677f\u662f\u7a7a\u7684\uff0c\u8bf7\u786e\u4fdd\u60a8\u5728\u9762\u677f\u4e0a\u65b9\u7684\u9009\u62e9\u662f\u8fd9\u6837\u7684\uff1a    "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Chain Metrics"),": Substrate  "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Chain Instance"),": localhost:9615  "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Server Job"),": node_exporter  "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Server Host"),": localhost:9100  ")))}b.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||l;return n?a.a.createElement(d,c(c({ref:t},i),{},{components:n})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o}));var r=n(16),a=n(95);function l(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var l=void 0===r?{}:r,o=l.forcePrependBaseUrl,c=void 0!==o&&o,s=l.absolute,i=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+p:p}(l,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},95:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);