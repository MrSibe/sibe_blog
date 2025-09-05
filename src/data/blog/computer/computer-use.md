---
title: 计算机原来可以这么用
author: MrSibe
pubDatetime: 2025-01-01T00:00:00Z
slug: computer-use
featured: false
draft: false
description: Learn about 计算机原来可以这么用 with detailed explanations and examples.

---

# 计算机原来可以这么用 | 压缩篇

现在计算机可以说是大学生的标配，但是可能还是有很多同学都不太了解手头电脑的很多功能。比如说，部门要求把文件打包发给指定的邮箱，我该怎么打包？为什么我的 C 盘总是爆满？所以西贝今天开一个新的专栏，主要面向非计算机的同学科普一些实用的计算机使用方法。

![C盘又爆了](https://raw.githubusercontent.com/MrSibe/obsidian_images/main/C.jpg)

## 压缩到底在干嘛？

顾名思义，压缩就是减小文件的体积。早期计算机网络很慢，为了提高传输文件传输的效率，把文件先压缩变小，传输到对方的电脑，对方进行解压之后就可以得到原始的文件了。

对了顺便介绍一下，如果对方发给你的文件后缀是 zip、7z、rar，那说明这个文件是压缩文件，你需要用压缩软件打开。

## 压缩软件那些事（选看）

压缩这个东西真不错，于是上世纪 80 年代兴起了很多压缩软件，很多都要付费。一位叫 Phil Katz 的程序员不乐意了，干脆自己原创了一个压缩算法，写了一个压缩软件叫 PKZIP，可以把文件压缩成 zip 后缀的压缩文件（没错，这就是 zip 文件的来历）。

好东西一定要广泛应用。Windows 直接把 PKZIP 引入到了自己的操作系统里面，并且给这个压缩软件写了一个好看的界面，WinZip 就诞生了。WinZip 有着广泛的用户，传播范围更广，基本上成为了当时大家电脑上的必装软件。

1993 年出现了 RAR 压缩格式，Windows 操作系统上也随之出现了 WinRAR 压缩软件。由于 rar 格式比 zip 压缩格式压缩率更高，因此也成为相当流行的压缩格式。

1999 年，7z 压缩格式诞生，其对应的 7-zip 压缩软件更是因为开源而更加火爆。7z 的优点是使用了 LZMA 与 LZMA2 算法的压缩率更高，但是压缩时间确实要长一点。

这就是咱们常用的压缩格式：zip、7z、rar 的来历。

## 我该怎么压缩？

如果你在学生部门工作，估计会经常看各个通知上会这么说：请将 xxxx 文件打包压缩发到 xxx 邮箱。

“打包压缩”这个词很生动形象，这就是需要掌握的关键，是我们的四字箴言。

### 选一个合适的压缩软件吧！

西贝用过 WinRAR、7-ZIP 等压缩软件，系统自带的压缩功能也用过。最终我只留下了 Bandizip 和 7-zip。（因为其他软件要么广告一大堆，要么界面极其复杂，看得人眼花缭乱）这里我教大家安装并使用 7-zip 软件。

首先进入 7-zip 官方网站：[7-Zip 官方中文网站](https://sparanoid.com/lab/7z/)

![6d83e2687d5a258dc3f78c5ea9d81f2f.png](https://raw.githubusercontent.com/MrSibe/obsidian_images/main/202502141527655.png)


下载界面很简陋，直接点击箭头所指的下载即可开始下载（如果你的电脑是 32 位的，点下面的下载链接）。下载好后，双击打开下载好的 exe 安装文件。

![image.png](https://raw.githubusercontent.com/MrSibe/obsidian_images/main/202502141530987.png)

这个界面要求你选择 7-zip 的安装位置。我建议大家有 D 盘的修改成 D 盘，没有的话默认即可。

配置好安装位置后，点击下面的“Install”安装，等待就行啦。

![image.png](https://raw.githubusercontent.com/MrSibe/obsidian_images/main/202502141533253.png)

显示这个界面，直接点击下面的“Close”按钮，安装就完成啦！

### “打包压缩”的秘籍

还记得我们的秘籍吗？“打包压缩”。“打包”就是把要压缩的文件放在一个文件夹下，“压缩”就是压缩这个文件夹。接下来实际操作一下。

假如我现在要给小然传两份资料：一个是我的 docx 格式的项目申报书，另一个是项目 ppt，我该怎么压缩后发给他呢？

![image.png](https://raw.githubusercontent.com/MrSibe/obsidian_images/main/202502141541808.png)


首先打包！让我们先建立一个文件夹，名字叫“西贝的项目”，这样让小然明白这是我发给他的项目文件。

![image.png](https://raw.githubusercontent.com/MrSibe/obsidian_images/main/202502141543958.png)

接下来把两个文件选中，拖进文件夹，打包就完成啦！是不是特别简单！

接下来进行压缩！右键点击文件夹，选择最下面的“显示更多选项”，然后移动到“7-zip”选项。

![ccb533de0e074b3283b777924a2d5b1d.png](https://raw.githubusercontent.com/MrSibe/obsidian_images/main/202502141547323.png)

在这里可以选择 zip 格式或者 7z 格式。zip 格式压缩快，但是压缩率没有 7z 高；7z 格式则相反。我们可以根据自己的需求选择特定的格式。西贝用的最多的格式是 zip 噢。

压缩之后，文件夹旁边就会出现一个新的文件，这就是压缩好的文件啦。西贝通过 QQ 或者微信就可以直接发给小然啦。

### 解压

小然解压就很简单了：双击发过来的压缩包，7-zip 软件就会自动打开压缩包。

![image.png](https://raw.githubusercontent.com/MrSibe/obsidian_images/main/202502141553210.png)

接下来我们点击右上角的“解压”按钮，再点击“确定”，解压后的文件就放在压缩包旁边啦！

## 压缩妙招

在网速越来越快的今天，为了提高传输效率而进行解压似乎没那么必要了。在我看来，压缩更现实的目的无非以下这些：

1. QQ 不能传输文件夹，压缩之后就可以传输了。
2. xx网盘在线解压要 VIP，下载到电脑上，再用压缩软件解压，省钱省心。
3. 适合备份不常用的资源（比如老照片就可以打包压缩存储起来）。

还有什么压缩妙招，可以在评论区分享哦。