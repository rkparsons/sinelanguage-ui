import { execSync } from 'child_process'

execSync(
    'contentful-schema-diff --from i1ay3ni34n6m --to sd0i1a7mk386 --token CFPAT-hDp1IiEWt2UGbtmERKqYV3cKSXUCjgimCAhZykfTM0Y --out cms/migrations --one-file',
    { encoding: 'utf-8' }
)
