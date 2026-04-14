---
name: workflow-contract-hardening
description: Review local GitHub Actions workflow files and reduce Terraform coupling without accessing GitHub or executing workflows.
---

Use this skill when editing or reviewing GitHub Actions workflow files in the FlowDX repository.

Objectives:
- reduce unnecessary TF_VAR_* exposure
- minimize CI/CD knowledge of Terraform internals
- classify workflow inputs as removable, vars, or secrets
- keep all GitHub-side changes manual and user-driven

Hard boundaries:
- do not access GitHub
- do not call GitHub APIs
- do not modify repository settings
- do not create or update GitHub variables, secrets, or environments
- do not execute GitHub Actions workflows
- do not simulate remote GitHub execution

When a manual GitHub-side change is required:
- stop and tell the user exactly what must be created manually
- specify:
  - name
  - type: variable or secret
  - environment: production, staging, or both
  - reason
- wait for user confirmation before assuming that the GitHub-side change exists

Execution pattern:
1. inspect local workflow files
2. compare workflow env inputs with Terraform variables actually used
3. identify removable inputs
4. classify remaining inputs as vars, secrets, or local-only configuration
5. if a new GitHub-side secret/variable is needed, ask the user to create it manually
6. apply only the local code changes that are safe without GitHub access
7. summarize follow-up manual steps
