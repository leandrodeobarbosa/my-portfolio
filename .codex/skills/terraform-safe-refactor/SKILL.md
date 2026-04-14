---
name: terraform-safe-refactor
description: Safely refactor Terraform in FlowDX with minimal risk to production.
---

Use this skill when working on Terraform refactors in the FlowDX repository.

Objectives:
- reduce coupling
- improve structure
- preserve production behavior
- avoid unnecessary disclosure
- prepare for multi-environment layout safely

Rules:
- do not modify production DNS / Hosted Zone ownership unless explicitly requested
- treat leandrodeobarbosa.dev Route53 records as high-risk
- prefer small, reversible changes
- do not combine modularization, staging creation, and DNS migration in one step
- reduce unnecessary outputs
- keep live environment entrypoints thin
- prefer modules by architectural component
- do not introduce destructive changes to imported resources without explicit warning
- do not assume GitHub-side variables or secrets exist unless the user confirmed manual creation

Execution pattern:
1. inspect current variables, outputs, modules, and live layout
2. identify the smallest safe change
3. explain the intended diff briefly
4. make only that change
5. run minimal local validation:
   - terraform fmt
   - terraform validate
   - terraform plan only when explicitly safe and relevant
6. summarize remaining follow-up work and any manual GitHub-side requirements
