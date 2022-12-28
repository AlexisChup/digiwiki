<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221228174241 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category_sub_category (category_id INT NOT NULL, sub_category_id INT NOT NULL, PRIMARY KEY(category_id, sub_category_id))');
        $this->addSql('CREATE INDEX IDX_6634D40A12469DE2 ON category_sub_category (category_id)');
        $this->addSql('CREATE INDEX IDX_6634D40AF7BFE87C ON category_sub_category (sub_category_id)');
        $this->addSql('ALTER TABLE category_sub_category ADD CONSTRAINT FK_6634D40A12469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE category_sub_category ADD CONSTRAINT FK_6634D40AF7BFE87C FOREIGN KEY (sub_category_id) REFERENCES sub_category (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE sub_category_category DROP CONSTRAINT fk_f32fce50f7bfe87c');
        $this->addSql('ALTER TABLE sub_category_category DROP CONSTRAINT fk_f32fce5012469de2');
        $this->addSql('DROP TABLE sub_category_category');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE TABLE sub_category_category (sub_category_id INT NOT NULL, category_id INT NOT NULL, PRIMARY KEY(sub_category_id, category_id))');
        $this->addSql('CREATE INDEX idx_f32fce5012469de2 ON sub_category_category (category_id)');
        $this->addSql('CREATE INDEX idx_f32fce50f7bfe87c ON sub_category_category (sub_category_id)');
        $this->addSql('ALTER TABLE sub_category_category ADD CONSTRAINT fk_f32fce50f7bfe87c FOREIGN KEY (sub_category_id) REFERENCES sub_category (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE sub_category_category ADD CONSTRAINT fk_f32fce5012469de2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE category_sub_category DROP CONSTRAINT FK_6634D40A12469DE2');
        $this->addSql('ALTER TABLE category_sub_category DROP CONSTRAINT FK_6634D40AF7BFE87C');
        $this->addSql('DROP TABLE category_sub_category');
    }
}
