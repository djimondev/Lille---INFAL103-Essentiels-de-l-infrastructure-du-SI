# Multipass

Multipass allows you to run ubuntu VM under Linux / Mac / Windows.

## Introduction

Here is the [full documentation](https://multipass.run/)

## Installation

- [Linux](https://multipass.run/docs/installing-on-linux)
- [Windows](https://multipass.run/docs/installing-on-windows)
- [macOs](https://multipass.run/docs/installing-on-macos)

## Some commands

```bash
multipass --version
multipass find # See ubuntu images availables
multipass list # See VM installed on the host machine
watch -n 1 multipass list # same as before with refresh every second
 multipass launch --name myfirstvm # to start my first VM with default image
 multipass shell myfirstvm # To attach to my shell VM
multipass stop myfirstvm # To stop myfirstvm
multipass launch --name [vm_name] --mount [local_path]:[vm_path] # to launch a vm and mount a directory inside
multipass mount [local_path] [vm_name]:/[vm_path] # To mount a volume on a started vm

multipass stop --all # To stop every VM
multipass delete --all --purge # To delete and purge every VM

multipass launch --cpus 8 --disk 40G --mem 16G -n [vm_name]
```

## To go further

```bash
multipass --help
```
